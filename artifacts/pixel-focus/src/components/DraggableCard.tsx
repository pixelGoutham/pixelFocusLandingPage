import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useDraggable } from "@/hooks/use-draggable";

// Rubber-banding function from Apple's design principles
function rubberband(overshoot, dimension, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

// Momentum projection function (from Apple's Designing Fluid Interfaces)
function project(initialVelocity /* px/s */, decelerationRate = 0.998) {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

export default function DraggableCard() {
  const [isDragging, setIsDragging] = useState(false);
  const reducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const dragBounds = useRef({
    minX: -100,
    maxX: 100,
    minY: -100,
    maxY: 100
  });

  // Use useState for position that we'll update with drag
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isOffsetClamped, setIsOffsetClamped] = useState(false);

  const dragHandlers = useDraggable({
    onDragStart: (event) => {
      setIsDragging(true);
      setIsOffsetClamped(false);
      // When dragging starts, reset velocity tracking
      setVelocity({ x: 0, y: 0 });
    },
    onDragMove: (event, velocityVal) => {
      // Calculate proposed new position
      const proposedX = position.x + velocityVal.x * 0.01;
      const proposedY = position.y + velocityVal.y * 0.01;

      // Check if we're outside bounds and apply rubber-banding
      let clampedX = proposedX;
      let clampedY = proposedY;
      let wasClamped = false;

      // X-axis rubber-banding
      if (proposedX < dragBounds.current.minX) {
        const overshoot = dragBounds.current.minX - proposedX;
        clampedX = dragBounds.current.minX - rubberband(overshoot, window.innerWidth);
        wasClamped = true;
      } else if (proposedX > dragBounds.current.maxX) {
        const overshoot = proposedX - dragBounds.current.maxX;
        clampedX = dragBounds.current.maxX + rubberband(overshoot, window.innerWidth);
        wasClamped = true;
      }

      // Y-axis rubber-banding
      if (proposedY < dragBounds.current.minY) {
        const overshoot = dragBounds.current.minY - proposedY;
        clampedY = dragBounds.current.minY - rubberband(overshoot, window.innerHeight);
        wasClamped = true;
      } else if (proposedY > dragBounds.current.maxY) {
        const overshoot = proposedY - dragBounds.current.maxY;
        clampedY = dragBounds.current.maxY + rubberband(overshoot, window.innerHeight);
        wasClamped = true;
      }

      setIsOffsetClamped(wasClamped);

      // Update position based on drag (1:1 tracking with rubber-banding)
      setPosition({ x: clampedX, y: clampedY });
      // Track velocity for handoff
      setVelocity(velocityVal);
    },
    onDragEnd: (event, velocityVal) => {
      setIsDragging(false);
      // When drag ends, launch with velocity (but reduce if we were clamped)
      // Apply momentum projection to determine where it should go
      const projectedOffsetX = project(velocityVal.x);
      const projectedOffsetY = project(velocityVal.y);

      const finalVelocity = isOffsetClamped
        ? { x: velocityVal.x * 0.2, y: velocityVal.y * 0.2 } // Much reduced velocity if clamped
        : { x: velocityVal.x * 0.8, y: velocityVal.y * 0.8 }; // Normal velocity handoff

      setVelocity(finalVelocity);

      // We could use the projected offset to animate to a predicted resting position
      // but for simplicity, we'll let the spring settle naturally with the velocity
    }
  });

  return (
    <motion.div
      ref={cardRef}
      {...dragHandlers.pointers}
      style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 200,
        height: 260,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        transform: `translate(${position.x}px, ${position.y}px)`,
        boxShadow: isOffsetClamped
          ? "0 15px 35px rgba(0, 0, 0, 0.4)" // Deeper shadow when clamped
          : "0 10px 30px rgba(0, 0, 0, 0.3)",
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none", // Prevents browser default touch behavior
        userSelect: "none",
        // Hint at imminent motion for frame-level smoothness
        willChange: "transform",
      }}
      initial={{ x: 0, y: 0 }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        bounce: isOffsetClamped ? 0.05 : 0.2, // Very little bounce when clamped, normal when free
        duration: 0.4,
        // Velocity is implicitly handled by the animate props updating with velocity
      }}
    >
      <div style={{
        padding: "20px",
        textAlign: "center",
        color: "white",
        fontFamily: "'Inter', sans-serif"
      }}>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
          Drag Me
        </h3>
        <p style={{ margin: "0", fontSize: "14px", opacity: 0.8 }}>
          Try flicking me!
        </p>
        {isDragging && (
          <div style={{ marginTop: "10px", fontSize: "12px", opacity: 0.6 }}>
            {isOffsetClamped ? "Stretching..." : "Dragging..."}
          </div>
        )}
        {!isDragging && isOffsetClamped && (
          <div style={{ marginTop: "10px", fontSize: "12px", opacity: 0.6 }}>
            Settling back...
          </div>
        )}
        {!isDragging && !isOffsetClamped && (
          <div style={{ marginTop: "10px", fontSize: "12px", opacity: 0.6 }}>
            Gliding to stop...
          </div>
        )}
      </div>
    </motion.div>
  );
}
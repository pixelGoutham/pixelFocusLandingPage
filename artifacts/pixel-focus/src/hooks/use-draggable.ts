import { useState, useRef, useCallback } from "react";
import { useSpring } from "framer-motion";

interface UseDraggableProps {
  onDragStart?: (event: PointerEvent) => void;
  onDragMove?: (event: PointerEvent, velocity: { x: number; y: number }) => void;
  onDragEnd?: (event: PointerEvent, velocity: { x: number; y: number }) => void;
  threshold?: number;
}

export function useDraggable({
  onDragStart,
  onDragMove,
  onDragEnd,
  threshold = 10,
}: UseDraggableProps = {}) {
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0 as unknown as number, y: 0 as unknown as number});
  const startPos = useRef({x: 0, y: 0});
  const lastPos = useRef({x: 0, y: 0});
  const lastTime = useRef<number>(0);
  const pointerId = useRef<number | null>(null);

  const handlePointerDown = useCallback((event: PointerEvent) => {
    // Start capturing pointer events
    event.target.setPointerCapture(event.pointerId);

    // Initialize tracking
    pointerId.current = event.pointerId;
    startPos.current = {x: event.clientX, y: event.clientY};
    lastPos.current = {x: event.clientX, y: event.clientY};
    lastTime.current = performance.now();

    setIsDragging(false); // Not dragging yet, waiting for threshold

    if (onDragStart) {
      onDragStart(event);
    }
  }, [onDragStart]);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    // Only respond to our tracked pointer
    if (pointerId.current !== event.pointerId) return;

    // Calculate movement
    const dx = event.clientX - startPos.current.x;
    const dy = event.clientY - startPos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if we've passed the threshold
    if (!isDragging && distance > threshold) {
      setIsDragging(true);
    }

    if (isDragging) {
      // Calculate velocity
      const now = performance.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const vx = (event.clientX - lastPos.current.x) / dt * 1000; // pixels per second
        const vy = (event.clientY - lastPos.current.y) / dt * 1000; // pixels per second
        setVelocity({x: vx, y: vy});
        lastTime.current = now;
      }

      lastPos.current = {x: event.clientX, y: event.clientY};

      if (onDragMove) {
        onDragMove(event, {x: velocity.x, y: velocity.y});
      }
    }
  }, [isDragging, onDragMove, threshold, velocity.x, velocity.y]);

  const handlePointerUp = useCallback((event: PointerEvent) => {
    // Only respond to our tracked pointer
    if (pointerId.current !== event.pointerId) return;

    // Release pointer capture
    event.target.releasePointerCapture(event.pointerId);

    const finalVelocity = {x: velocity.x, y: velocity.y};
    const wasDragging = isDragging;

    // Reset state
    setIsDragging(false);
    pointerId.current = null;
    setVelocity({x: 0, y: 0});

    if (onDragEnd && wasDragging) {
      onDragEnd(event, finalVelocity);
    }
  }, [onDragEnd, isDragging, velocity.x, velocity.y]);

  const handlePointerCancel = useCallback((event: PointerEvent) => {
    // Only respond to our tracked pointer
    if (pointerId.current !== event.pointerId) return;

    // Release pointer capture
    event.target.releasePointerCapture(event.pointerId);

    // Reset state
    setIsDragging(false);
    pointerId.current = null;
    setVelocity({x: 0, y: 0});
  }, []);

  return {
    isDragging,
    velocity,
    pointers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
    }
  };
}
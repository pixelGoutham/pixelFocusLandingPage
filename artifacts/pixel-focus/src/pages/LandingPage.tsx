import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Problem from "../components/Problem";
import AppReveal from "../components/AppReveal";
import Ecosystem from "../components/Ecosystem";
import Platforms from "../components/Platforms";
import ThePromise from "../components/ThePromise";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div
      className="grain-overlay"
      style={{
        minHeight: "100dvh",
        background: "#080808",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <AppReveal />
      <Ecosystem />
      <Platforms />
      <ThePromise />
      <Donate />
      <Footer />
    </div>
  );
}

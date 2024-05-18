import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import ScrollBar from "./component/ScrollBar";
import InfiniteMoving from "./component/InfiniteMoving";
import Tooltips from "./component/Tooltips";
import Wavelay from "./component/Wavelay";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <Projects/>
      <InfiniteMoving/>
      <Wavelay/>
    </main>
  );
}

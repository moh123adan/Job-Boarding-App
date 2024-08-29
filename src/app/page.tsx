import Image from "next/image";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Jobs />
      <About />
      <Contact />
    </>
  );
}

import Hero from "../components/hero";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Contact/>
      
    </div>
  );
}

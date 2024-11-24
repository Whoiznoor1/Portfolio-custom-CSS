import About from "@/Components/about/About";
import Contact from "@/Components/contact/Contact";
import Footer from "@/Components/footer/Footer";
import Hero from "@/Components/hero/Hero";
import Navbar from "@/Components/navbar/Navbar";
import Projects from "@/Components/project/Project";





export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

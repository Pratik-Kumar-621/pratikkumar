import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/*
        <Blogs />*/}
        <Contact />
        <Footer />
        <ToastContainer />
      </main>
    </>
  );
}

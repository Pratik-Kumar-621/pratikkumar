import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contributions from "./components/Contributions";
// import Blogs from "./components/Blogs";
// import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/*
        <Projects />
        <Contributions />
        <Blogs />
        <Contact /> */}
      </main>
    </>
  );
}

import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <footer className="footer">
  <p>© 2026 Gunjan Gupta. All rights reserved.</p>
</footer>
    </>
  );
}

export default App;
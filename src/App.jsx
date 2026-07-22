import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <Header
        isDark={isDark}
        onThemeToggle={() => setIsDark((prev) => !prev)}
      />

      <main>
        <section id="hero">
          <Hero isDark={isDark} />
        </section>

        <section id="about">
          <About isDark={isDark} />
        </section>

        <section id="skills">
          <Skills isDark={isDark} />
        </section>

        <section id="projects">
          <Projects isDark={isDark} />
        </section>

        <section id="experience">
          <Experience isDark={isDark} />
        </section>

        <section id="contact">
          <Contact isDark={isDark} />
        </section>
      </main>

      <Footer isDark={isDark} />
    </>
  );
}

export default App;
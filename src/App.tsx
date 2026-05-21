
import './App.css'
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Footer from './components/Footer'
import Hero from './components/hero';
import Navbar from './components/navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
   return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App

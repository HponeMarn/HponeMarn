
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/sills'
import Experience from './components/experience'

import Education from './components/education'
import Contact from './components/contact'
import Projects from './components/projects'
import Footer from './components/Footer'

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

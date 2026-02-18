import { useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import './index.css';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/section/Home';
import About from './components/section/About';
import Projects from './components/section/Projects';
import Contact from './components/section/Contact';
import Hero from './components/Hero';
import Experience from './components/section/Experience';


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Hero />
    {/* <Home /> */}
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
      
      {!isLoading && <LoadingScreen onComplete= {() => setIsLoading(true)} />} {" "}
      {/* <div 
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0"
          } bg-text-gray-100`}>
      </div> */}
      
      
    </>
  )
}

export default App

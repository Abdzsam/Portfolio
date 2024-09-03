import React from 'react'
import Navbar from './components/Navbar'
import Me from './components/Me'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
{
 /* import Signup from './components/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'*/
}



function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-[#b4dbdc] selection:text-[#004369]">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#0077b5] bg-[radial-gradient(#0077b5_1px,#004369_2.5px)] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Me/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        
      </div>
    </div>
  )
}

export default App

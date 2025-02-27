import About from "./sections/About"
import Contact from "./sections/Contact"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
    
  )
}

export default Home
import "./App.css"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import Nav from "./components/Nav"
import Projects from "./components/Projects"


const App = () => {
  return (
    <div className='bg-[#242938] text-[#F7F7F7] scroll-smooth'>
      <Nav />
      <Hero />
      <Journey />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
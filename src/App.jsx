import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Servicios from "./sections/Servicios"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Somos from "./sections/Somos"
import Contacto from "./sections/Contacto"
import Footer from "./sections/Footer"


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Somos/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App

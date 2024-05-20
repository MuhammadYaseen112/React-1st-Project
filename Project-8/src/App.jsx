import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Program from "./Components/Program/Program"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Program/>
      </div>
    </>
  )
}

export default App

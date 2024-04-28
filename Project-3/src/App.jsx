import { useState } from "react"
import GamePlay from "./Components/GamePlay/GamePlay"
import StartGame from "./Components/Starts/StartGame"

function App() {

  const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
      }
      
    </>
  )
}

export default App

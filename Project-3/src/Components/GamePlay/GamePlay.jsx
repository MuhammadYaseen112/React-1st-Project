import styled from "styled-components"
import NumberSelector from "../NumberSelector/NumberSelector"
import TotalScore from "../TotalScore/TotalScore"
import RollDice from "../Roll Dice/RollDice"
import { useState } from "react"

const GamePlay = ()=>{
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    return(
        <MainContainer>
            <div className="topSection">
            <TotalScore/>
            <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice}/>
        </MainContainer>
    )
}

export default GamePlay;
const MainContainer = styled.main`
    padding: 70px;
    .topSection{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
` 
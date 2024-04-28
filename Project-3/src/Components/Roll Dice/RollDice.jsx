// import { useState } from "react"; to be remove
import styled from "styled-components";

const RollDice = ({currentDice,setCurrentDice})=>{
 
    // const [currentDice, setCurrentDice] = useState(1)

    const generateRandomNumber  = (min, max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const roleDice = ()=>{
        const randomNumber = generateRandomNumber(1,7)
        setCurrentDice((prev)=>randomNumber)
    }

    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/Images/dice_${currentDice}.png`} alt="Dice 1" />
            </div>
            <p>Click on the Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`
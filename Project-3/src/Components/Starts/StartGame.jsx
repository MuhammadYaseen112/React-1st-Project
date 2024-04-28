import styled from "styled-components"
const StartGame = ({toggle})=>{
    return(
        <Container>
            <img src="/Images/dice.png" alt="Bg Image" />
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`
const Button = styled.button`
   color: white;
    padding: 10px 18px;
    background: #000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4 background ease-in;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
        transition: 0.3s  background ease-in;

    }
`;
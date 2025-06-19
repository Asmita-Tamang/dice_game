import styled from "styled-components";
import dice1 from "../../public/images/dice/dice_1.png"
import dice2 from "../../public/images/dice/dice_2.png"
import dice3 from "../../public/images/dice/dice_3.png"
import dice4 from "../../public/images/dice/dice_4.png"
import dice5 from "../../public/images/dice/dice_5.png"



const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/dice_game/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />

      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}; 

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;

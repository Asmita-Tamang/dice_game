import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    
    <Container>
        <img src="./images/dices.png" alt="" />
        <div>
            <h1 className='content'>Dice Game</h1>
            <Button
            onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;


    .content{
        font-size: 96px;
      white-space: nowrap;
    }
`


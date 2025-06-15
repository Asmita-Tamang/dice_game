import styled from "styled-components"


export const Button = styled.button`
   
    padding: 10px 18px;
    gap: 10px;

    background: black;
    border-radius: 5px;
    min-width: 220px;
    color: aliceblue;
    border:none; 
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;


    &:hover{
      background-color: aliceblue;
      color: black;
      border: solid 1px black;
      transition: 0.3s background ease-in;
    }

`

export const OutlineButton = styled(Button)`
background-color: white;
border: solid 1px black;
color: black;

 &:hover{
      background-color: black;
      color: white;
      border: solid 1px transparent;
    }

`
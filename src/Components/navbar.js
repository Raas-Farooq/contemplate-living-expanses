import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";


const Container = styled.div`
display:flex;
justify-content:space-between;


h2{
    color:purple
}
`

const Button = styled.button`
background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid blue;
border-radius: 20px;
cursor: pointer;
margin-right:'20px'

&:hover{
    background-color:blue;
}

`

export default function Navbar(){

   const {setShowModal, showModal, setIncome, setExpanse} = useGlobalContext();

   const handleModal = () => {
    setShowModal(!showModal);
   
}

    return(
        <Container>
            <h2> ContemplateExpanse </h2>
            <Button onClick={handleModal}> Add Money</Button>
        </Container>
    )
}

import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
justify-content:space-between
`

const Button = styled.div`
background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid blue;
border-radius: 3px;
cursor: pointer;
margin-right:'20px'
`

export default function Navbar(){

   
    return(
        <Container>
            <h2> ContemplateExpanse </h2>
            <Button onClick={(e) => {
                console.log("Money Button is Clicked")
            }}> Add Money</Button>
        </Container>
    )
}

import React from "react";
import {styled} from 'styled-components';

const Container = styled.div`
width:100%;
display:flex;
gap:20px;

div{
    width:50%;
}
`

const IncomeSection = styled.div`
width:50%;

p{
    background-color:lightblue;
    height:40px
}
`
const ExpanseSection = styled.div`
width:50%;
p{
    background-color:lightgreen;
    height:40px
}
`



export default function Footer(){

    return(
        <Container>
            <IncomeSection>
                <h3> Income</h3>
                <p> 1000 </p>
            </IncomeSection>
            <ExpanseSection>
                <h3> Expanse</h3>
                <p> 800 </p>
            </ExpanseSection>
        </Container>
       
    )
}

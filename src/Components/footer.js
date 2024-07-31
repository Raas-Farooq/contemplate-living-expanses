import React, { useEffect } from "react";
import {styled} from 'styled-components';
import { useGlobalContext } from "./context";


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

    const {income, expanse,incomeList, expenseList} = useGlobalContext();

    useEffect(() => {
        console.log("incomeList; in Footer", income + 'expense: ', expanse);
    }, [income, incomeList])
    return(
        <Container>
            <IncomeSection>
                <h3> Income</h3>
                {incomeList.map((income,IND) => (
                    <p key={IND}> ${income} </p>
                ))}
                
            </IncomeSection>
            <ExpanseSection>
                <h3> Expanse</h3>
                {expenseList.map((expense, index) => (
                    <p key={index}> ${expense} </p>
                ))}
                
            </ExpanseSection>
        </Container>
       
    )
}

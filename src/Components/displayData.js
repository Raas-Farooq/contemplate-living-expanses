import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import PieChart from "./PieChart";

const Container = styled.div`
height:300px;
display:flex;
gap:20px
`

const MainContent1 = styled.div`

background: rgba(0, 0, 0, 0.1);
h3{
    text-align:center
}
width:50%;
`

const ShowIncome = styled.div`

background: white;
height:50px;
text-align:center;
font-size:20px;
width:100%;
`

const ShowExpanse = styled.div`
background: white;
height:50px;
text-align:center;
font-size:20px;
width:100%;
`

const MainContent2 = styled.div`
background: rgba(0, 0, 0, 0.1);
h3{
    text-align:center
}
width:50%;
`

export default function Display(){
    const {income, expanse} = useGlobalContext();
    const [value, setValue] = useState(0)

    useEffect(() => {
        const value = income - expanse;
        setValue(value);
    }, [income, expanse])


    return(
        <div>
            <Container>
                <MainContent1>
                    <h3> Income </h3>
                    <ShowIncome> ${income} </ShowIncome>
                    <h3> Expanse</h3>
                    
                    <ShowExpanse> ${expanse} </ShowExpanse>
                    <h2> value: ${value} </h2>
                </MainContent1>
                <MainContent2>
                    <PieChart />
                </MainContent2>
                
            </Container>
        </div>
    )
}

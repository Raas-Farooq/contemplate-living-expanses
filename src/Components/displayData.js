import React from "react";
import styled from "styled-components";

const Container = styled.div`
height:400px;
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

const MainContent2 = styled.div`
background: rgba(0, 0, 0, 0.1);
h3{
    text-align:center
}
width:50%;
`

export default function Display(){

    return(
        <div>
            <Container>
                <MainContent1>
                    <h3> Income </h3>
                    
                    <h3> Expanse</h3>
                </MainContent1>
                <MainContent2>

                </MainContent2>
            </Container>
        </div>
    )
}

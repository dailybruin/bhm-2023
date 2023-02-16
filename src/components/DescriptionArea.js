import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Container = styled.div `
width: 100%
height: fit-content;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Textbox = styled.div`
position: relative;
width: 70%;
margin:auto;
text-align:center;

font-family: 'Poppins', sans-serif;
font-size:2vw;
color:black;

${mediaQueries.mobile} {
    width: 60vw;
    font-size: 8px;
}
`

const Title = styled.div`
position: relative;
width: 70%;
margin:auto;
margin-bottom: 0em;
text-align:center;

font-family: 'Smooch Sans', sans-serif;
font-size: 13vw;
color: #387854;

${mediaQueries.mobile} {
    width: 60vw;
    font-size: 8px;
`

const Border = styled.div`
position:relative;
display: inline-block;
width: 90%;
height: 3rem;
background: #387854;

${mediaQueries.mobile} {
    width: 60vw;
    font-size: 8px;
}

`
export default function DescriptionText({description_text}) {
    return (
        <Container>
            <Textbox>
                {description_text}
            </Textbox>
        </Container>
    )
}

export function CatalogTitle(props){
    return(
        <Container>
            <Title>
                {props.title}
            </Title>
            <Border></Border>
        </Container>
    )
}

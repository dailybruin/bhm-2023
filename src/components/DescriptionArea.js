import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Container = styled.div `
    width: 100vw;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Textbox = styled.div`
    position: relative;
    width: 80vw;
    margin: auto;
    text-align: center;
    padding: 2em;

    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: black;

    ${mediaQueries.mobile} {
        width: 60vw;
        font-size: 16px;
    }
`

const Title = styled.div`
    position: relative;
    margin: auto;
    margin-bottom: 0;
    text-align: center;

    font-family: 'Smooch Sans', sans-serif;
    font-size: 90px;
    color: #387854;

    ${mediaQueries.mobile} {
        width: 80vw;
        font-size: 50px; 
    }
`

const Border = styled.div`
    position:relative;
    display: inline-block;
    width: 90%;
    height: 3em;
    background: #387854;

    ${mediaQueries.mobile} {
        width: 80vw;
        height: 2em;
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

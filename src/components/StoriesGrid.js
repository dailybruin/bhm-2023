import { mediaQueries } from '../shared/config';
import styled from 'styled-components'
import React from 'react';

const OuterContainer = styled.div`
    position: relative;
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-areas:
        "card_one card_two"
        "card_one  quote";
    grid-template-columns: 4fr 6fr;
    column-gap: 1em

`
const Container = styled.div`
    grid-area: card_one;
    position: relative;
    background-color: red;
`
const Container2 = styled.div`
    grid-area: card_two;
    position: relative;
    background-color: yellow;
`
const PullQuote = styled.div`
    position: relative;
    grid-area: quote;
    font-size: 100px;
    font-weight: 800;
    color: #387854;
    text-align: left;

`

export default function StoriesGrid(props){
    console.log(props.articles)

    return(
        <OuterContainer>
            <Container>hi</Container>
            <Container2>hi</Container2>

            <PullQuote> {props.articles[2].quote_content} </PullQuote>

        </OuterContainer>
    )

}

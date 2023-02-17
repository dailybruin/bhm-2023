import { mediaQueries } from '../shared/config';
import styled from 'styled-components'
import React from 'react';
import ArticleCard from "./ArticleCards";

const Section1 = styled.div`
    position: relative;
    max-width: 90vw;
    margin: auto;
    display: grid;
    grid-template-areas:
        "card_one card_two"
        "card_one  quote";
    grid-template-columns: .4fr .6fr;
    column-gap: 1em;
    margin-top: 5em;
    padding-bottom: 1em;
    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
        margin-top: 2em;
        align-items: center;
        row-gap: 1em;
    }
`

const Section2 = styled.div`
    position: relative;
    max-width: 90vw;
    margin: auto;
    display: grid;
    grid-template-areas:
    "card_two card_two card_1"
    "card_two card_two card_1"
    "card_one block card_1"
    "card_one card_2 card_2"
    "card_one card_2 card_2";
    grid-template-columns: 2fr 1fr 2fr;
    column-gap: 1em;
    row-gap: 1em;
    padding-bottom: 1em;
    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
        align-items: center;
        row-gap: 1em;
    }
`
const Section3 = styled.div`
    position: relative;
    max-width: 90vw;
    margin: auto;
    display: grid;
    grid-template-areas:
    "card_two card_one"
    "quote card_one";
    grid-template-columns: .6fr .4fr;
    column-gap: 1em;
    padding-bottom: 1em;
    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
        align-items: center;
        row-gap: 1em;
    }
`
const Section4 = styled.div`
    position: relative;
    max-width: 90vw;
    margin: auto;
    display: grid;
    grid-template-areas:
    "card_one card_two card_two"
    "card_one card_two card_two"
    "card_one block card_1"
    "card_2 card_2 card_1"
    "card_2 card_2 card_1";
    grid-template-columns: 2fr 1fr 2fr;
    column-gap: 1em;
    row-gap: 1em;
    padding-bottom: 7em;
    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
        margin-top:2em;
        align-items: center;
        row-gap: 1em;
    }
`

const ContainerOne = styled.div`
    grid-area: card_one;
    position: relative;
`
const Container1 = styled.div`
    grid-area: card_1;
    position: relative;
`
const ContainerTwo = styled.div`
    grid-area: card_two;
    position: relative;
`
const Container2 = styled.div`
    grid-area: card_2;
    position: relative;
`
const PullQuote = styled.div`
    position: relative;
    grid-area: quote;
    font-size: 100px;
    font-weight: 800;
    color: #387854;
    text-align: left;
    font-family: "Smooch Sans", sans-serif;
    ${mediaQueries.mobile} {
        font-size: 35px;
        text-align: center;
    }
`
 const RedBlock = styled.div`
    grid-area: block;
    position: relative;
    background-color: #D3493D;
 `
 const GreenBlock = styled.div`
    grid-area: block;
    position: relative;
    background-color: #387854;
 `

export default function StoriesGrid(props){
    console.log(props.articles);
    const articles1 = props.articles.slice(0,3);
    const articles3 = props.articles.slice(7,10);

    return(
        <div>
        <Section1>
            {props && props.articles && articles1
                ? articles1.map((item) => {
                    if(item.article_title == "quote"){
                        return(
                            <PullQuote>
                                {item.quote_content}
                            </PullQuote>
                        )
                    }
                    else if(item.style == 'one'){
                        return(
                            <ContainerOne>
                                <ArticleCard 
                                article_title = {item.article_title}
                                article_image = {item.article_image} 
                                article_url = {item.article_url}
                                article_byline = {item.article_byline}
                                style = {item.style}
                                float = {item.float}
                                color = {item.color}
                                />
                            </ContainerOne>
                        )
                    }
                    else if(item.style == 'two'){
                        return(
                            <ContainerTwo>
                                <ArticleCard 
                                article_title = {item.article_title}
                                article_image = {item.article_image} 
                                article_url = {item.article_url}
                                article_byline = {item.article_byline}
                                style = {item.style}
                                float = {item.float}
                                color = {item.color}
                                />
                            </ContainerTwo>
                        )
                    }
                })
            : null}
        </Section1>
        <Section2>
            <ContainerTwo>
                <ArticleCard 
                article_title = {props.articles[3].article_title}
                article_image = {props.articles[3].article_image}
                article_url = {props.articles[3].article_url}
                article_byline = {props.articles[3].article_byline}
                style = {props.articles[3].style}
                float = {props.articles[3].float}
                color = {props.articles[3].color}
                />
            </ContainerTwo>
            <ContainerOne>
            <ArticleCard 
                article_title = {props.articles[4].article_title}
                article_image = {props.articles[4].article_image}
                article_url = {props.articles[4].article_url}
                article_byline = {props.articles[4].article_byline}
                style = {props.articles[4].style}
                float = {props.articles[4].float}
                color = {props.articles[4].color}
                />
            </ContainerOne>
            <Container1>
            <ArticleCard 
                article_title = {props.articles[5].article_title}
                article_image = {props.articles[5].article_image}
                article_url = {props.articles[5].article_url}
                article_byline = {props.articles[5].article_byline}
                style = {props.articles[5].style}
                float = {props.articles[5].float}
                color = {props.articles[5].color}
                />
            </Container1>
            <RedBlock></RedBlock>
            <Container2>
            <ArticleCard 
                article_title = {props.articles[6].article_title}
                article_image = {props.articles[6].article_image}
                article_url = {props.articles[6].article_url}
                article_byline = {props.articles[6].article_byline}
                style = {props.articles[6].style}
                float = {props.articles[6].float}
                color = {props.articles[6].color}
                />
            </Container2>  
        </Section2>
        <Section3>
        {props && props.articles && articles1
                ? articles3.map((item) => {
                    if(item.article_title == "quote"){
                        return(
                            <PullQuote>
                                {item.quote_content}
                            </PullQuote>
                        )
                    }
                    else if(item.style == 'one'){
                        return(
                            <ContainerOne>
                                <ArticleCard 
                                article_title = {item.article_title}
                                article_image = {item.article_image} 
                                article_url = {item.article_url}
                                article_byline = {item.article_byline}
                                style = {item.style}
                                float = {item.float}
                                color = {item.color}
                                />
                            </ContainerOne>
                        )
                    }
                    else if(item.style == 'two'){
                        return(
                            <ContainerTwo>
                                <ArticleCard 
                                article_title = {item.article_title}
                                article_image = {item.article_image} 
                                article_url = {item.article_url}
                                article_byline = {item.article_byline}
                                style = {item.style}
                                float = {item.float}
                                color = {item.color}
                                />
                            </ContainerTwo>
                        )
                    }
                })
            : null}
        </Section3>
        <Section4>
            <ContainerOne>
                <ArticleCard 
                article_title = {props.articles[10].article_title}
                article_image = {props.articles[10].article_image}
                article_url = {props.articles[10].article_url}
                article_byline = {props.articles[10].article_byline}
                style = {props.articles[10].style}
                float = {props.articles[10].float}
                color = {props.articles[10].color}
                />
            </ContainerOne>
            <ContainerTwo>
            <ArticleCard 
                article_title = {props.articles[11].article_title}
                article_image = {props.articles[11].article_image}
                article_url = {props.articles[11].article_url}
                article_byline = {props.articles[11].article_byline}
                style = {props.articles[11].style}
                float = {props.articles[11].float}
                color = {props.articles[11].color}
                />
            </ContainerTwo>
            <Container2>
            <ArticleCard 
                article_title = {props.articles[12].article_title}
                article_image = {props.articles[12].article_image}
                article_url = {props.articles[12].article_url}
                article_byline = {props.articles[12].article_byline}
                style = {props.articles[12].style}
                float = {props.articles[12].float}
                color = {props.articles[12].color}
                />
            </Container2>
            <GreenBlock></GreenBlock>
            <Container1>
            <ArticleCard 
                article_title = {props.articles[13].article_title}
                article_image = {props.articles[13].article_image}
                article_url = {props.articles[13].article_url}
                article_byline = {props.articles[13].article_byline}
                style = {props.articles[13].style}
                float = {props.articles[13].float}
                color = {props.articles[13].color}
                />
            </Container1>  

        </Section4>

        </div>
    )

}

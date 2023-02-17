import { mediaQueries } from '../shared/config';
import styled from 'styled-components'
import React from 'react';
import ArticleCard from "./ArticleCard";

const PullQuote = styled.div`
    position: relative;
    grid-area: quote;
    font-size: 3.7vw;
    font-weight: 800;
    color: #387854;
    text-align: left;
    font-family: "Smooch Sans", sans-serif;
`

const RedBox = styled.div`
    background-color: #D3493D
`

const GreenBox = styled.div`
    background-color: #387854
`

const Grid1 = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
#page {
  display: grid;
  grid-template-areas:
    "red yellow yellow"
    "red quote quote";
  grid-template-rows: 50vh 20vh;
  grid-template-columns: 38vw 55vw;
  gap: 10px;
        ${mediaQueries.mobile} {
        display: flex;
        columns: 1;
        column-width: auto;
    }
}


#page > .article_0 {
  grid-area: red;
background-color: #D3493D;
}

#page > .article_1 {
  grid-area: yellow;
 background-color: #EFB945;
}

#page > .article_2 {
  grid-area: quote;
}
`
const Grid2 = styled.div`
margin-left: 10px;
margin-bottom: 10px;
#page {
  display: grid;
  grid-template-areas:
    "green green green yellow yellow"
    "yellow2 yellow2 empty yellow yellow"
    "yellow2 yellow2  red red red";
  grid-template-rows: 50vh 30vh 50vh;
  grid-template-columns: repeat(5, 19vw);
  gap: 10px;
}

#page > .article_0 {
  grid-area: green;
  background-color: #387854;

}

#page > .article_1 {
  grid-area: yellow;
  background-color: #EFB945;
}

#page > .article_2 {
  grid-area: yellow2;
  background-color: #EFB945;
}

#page > .article_3 {
  grid-area: red;
  background-color: #D3493D;
}
`
const Grid3 = styled.div`
margin-bottom: 10px;
#page {
  display: grid;
  grid-template-areas:
    "green green yellow"
    "quote quote yellow";
  grid-template-rows: 50vh 20vh;
  grid-template-columns: 30vw 25vw 42vw;
  gap: 10px;
}

#page > .article_0 {
  grid-area: green;
 background-color: #387854;
}

#page > .article_1 {
  grid-area: quote;
margin-left: 10px;
}

#page > .article_2 {
  grid-area: yellow;
  background-color: #EFB945;
}
`
const Grid4 = styled.div`
margin-left: 10px;
#page {
  display: grid;
  grid-template-areas:
    "yellow yellow green green green"
    "yellow yellow GreenEmpty red2 red2 "
    "red red red red2 red2";
  grid-template-rows: 50vh 30vh 50vh;
  grid-template-columns: repeat(5, 19vw);
  gap: 10px;
}

${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    align - items: center;
    row - gap: 2em;
    padding: 0;
}

#page > .article_0 {
  grid-area: yellow;
 background-color: #EFB945;
}

#page > .article_1 {
  grid-area: red;
background-color: #D3493D;
}

#page > .article_2 {
  grid-area: red2;
background-color: #D3493D;
}

#page > .article_3 {
  grid-area: green;
 background-color: #387854;
}
`


export default function StoriesGrid(props) {
    
    const articles1 = props.articles.slice(0, 3);
    const articles2 = props.articles.slice(3, 7);
    const articles3 = props.articles.slice(7, 10);
    const articles4 = props.articles.slice(10, 14);

    return (
        <div>
            <Grid1>
                <section id="page">
                {articles1 ? articles1.map((item, index) => {
                    const articleArea = `article_${index}`;
                    if (item.article_title == "quote") {
                        return (
                            <PullQuote class={articleArea}>
                                "{item.quote_content}"
                            </PullQuote>
                        )
                    }
                    return (
                        <div class={articleArea}>
                                <ArticleCard
                                    article_title={item.article_title}
                                    
                                    article_url={item.article_url}
                                    article_byline={item.article_byline}
                                    style={item.style}
                                    color={item.color}
                                />
                         </div>    
                    );
                })
                        : null}
                </section>
            </Grid1>
            <Grid2>
                <section id="page">
                    <RedBox class="empty"/>
                    {articles2 ? articles2.map((item, index) => {
                        const articleArea = `article_${index}`;
                        return (
                            <div class={articleArea}>
                                <ArticleCard
                                    article_title={item.article_title}

                                    article_url={item.article_url}
                                    article_byline={item.article_byline}
                                    style={item.style}
                                    color={item.color}
                                />
                            </div>
                        );
                    })
                        : null}
                </section>
            </Grid2>
            <Grid3>
                <section id="page">
                    {articles3 ? articles3.map((item, index) => {
                        const articleArea = `article_${index}`;
                        if (item.article_title == "quote") {
                            return (
                                <PullQuote class={articleArea}>
                                    "{item.quote_content}"
                                </PullQuote>
                            )
                        }
                        return (
                            <div class={articleArea}>
                                <ArticleCard
                                    article_title={item.article_title}

                                    article_url={item.article_url}
                                    article_byline={item.article_byline}
                                    style={item.style}
                                    color={item.color}
                                />
                            </div>
                        );
                    })
                        : null}
                </section>
            </Grid3>
            <Grid4>
                <section id="page">
                    <GreenBox class="GreenEmpty" />
                    {articles4 ? articles4.map((item, index) => {
                        const articleArea = `article_${index}`;
                        return (
                            <div class={articleArea}>
                                <ArticleCard
                                    article_title={item.article_title}

                                    article_url={item.article_url}
                                    article_byline={item.article_byline}
                                    style={item.style}
                                    color={item.color}
                                />
                            </div>
                        );
                    })
                        : null}
                </section>
            </Grid4>
        </div>
    )
}

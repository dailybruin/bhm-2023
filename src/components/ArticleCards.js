import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

let Container = styled.div``;
let ArticleInfo = styled.div``;
let Image = styled.img``;
let Title = styled.a``;
let ByLine = styled.p``;
let ByLineText = "By";
let ArticleImage = styled.div``;
let TitleText = styled.p``;
let BylineText = styled.p``;
export default function ArticleCard(props) {
  function getBackground(color) {
    if (color == "yellow") {
      return "EFB945";
    }
    if (color == "green") {
      return "387854";
    }
    if (color == "red") {
      return "D3493D";
    }
  }
  function getStyle(style) {
    //STYLE ONE
    if (style == "one") {
      Container = styled.div`
        position: relative;
        max-width: 400px;
        margin: auto;
        box-sizing: content-box;
        background-color: #${getBackground(props.color)};
        height: fit-content;
        padding: 1em;
        overflow: visible;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        ${mediaQueries.mobile} {
          width: 80%;
        }
      `;
      Image = styled.img`
        display: block;
        width: 100%;
        max-width: 100%;
        height: 70%;
        margin: auto;
        box-sizing: content-box;
        object-fit: cover;
        z-index: 10;
        background-color: #d9d9d9;
      `;

      ArticleInfo = styled.div`
        display: flex;
        margin: 0;

        color: #ffffff;
        line-height: 1em;
        height: 50%;

        ${mediaQueries.mobile} {
          width: 100%;
        }
      `;

      Title = styled.div`
        flex: 1;
        width: 50%;
        font-size: 5.5vh;
        font-weight: 700;
        text-align: left;
        line-height: 0.7em;
        text-decoration: none;
        color: inherit;
        font-family: "Smooch Sans", sans-serif;
      `;

      TitleText = styled.p`
        justify-content: center;
        align-items: center;

        margin-top: 20%;
        margin-bottom: 10%;
      `;

      ByLine = styled.div`
        flex: 1;
        width: 50%;
        color: inherit;

        font-size: 2vh;
        font-weight: 500;
        font-family: "Poppins", sans-serif;

        line-height: 1.5em;
        text-align: center;

        margin-top: 5%;
        margin-bottom: 5%;
      `;

      BylineText = styled.p`
        justify-content: center;
        align-items: center;

        margin-left: 40%;
        height: 100%;
      `;
    }

    if (style == "two") {
      if (props.float == "right") {
        Container = styled.div`
          position: relative;
          display: flex;
          flex-direction: row-reverse;
          width: 744px;
          height: 320px;
          margin: auto;
          box-sizing: content-box;
          background-color: #${getBackground(props.color)};
          padding: 0.7em;
          overflow: visible;
          ${mediaQueries.mobile} {
            width: 90%;
            height: 50%;
          }
        `;
      }
      if (props.float == "left") {
        Container = styled.div`
          position: relative;
          display: flex;
          width: 744px;
          height: 320px;
          margin: auto;
          box-sizing: content-box;
          background-color: #${getBackground(props.color)};
          padding: 0.7em;
          overflow: visible;
          ${mediaQueries.mobile} {
            width: 90%;
            height: 50%;
          }
        `;
      }
      ArticleInfo = styled.div`
        flex: 0.4;
        color: #ffffff;
      `;

      ArticleImage = styled.div`
        flex: 0.6;
        margin: auto;
        height: 100%;
      `;

      Image = styled.img`
        width: 100%;
        height: 100%;
        box-sizing: content-box;
        object-fit: cover;
        background-color: #d9d9d9;
      `;

      Title = styled.a`
        display: block;
        padding-top: 1em;
        font-size: 5.5vh;
        font-weight: 600;
        text-align: center;
        line-height: 60px;
        color: inherit;
        font-family: "Smooch Sans", sans-serif;
        ${mediaQueries.mobile} {
          font-size: 7vh;
        }
      `;

      ByLine = styled.p`
        display: block;
        font-size: 2vh;
        font-weight: 300;
        text-align: center;
        color: inherit;
        font-family: "Poppins", sans-serif;
        white-space: pre-line;
      `;
    }
    ByLineText = "By\n";
    //STYLE THREE
    if (style == "three") {
      Container = styled.div`
        position: relative;
        width: 350px;
        height: 380px;
        margin: auto;
        box-sizing: content-box;
        background-color: #${getBackground(props.color)};
        padding: 0.7em;
        overflow: visible;
        ${mediaQueries.mobile} {
          width: 80%;
        }
      `;
      ArticleInfo = styled.div`
        display: block;
        margin: auto;
        color: #ffffff;
        line-height: 1em;
        height: 20%;
      `;
      ArticleImage = styled.div`
        position: absolute
        display: block;
        margin: auto;
        height: 80%;
      `;
      Image = styled.img`
        width: 100%;
        height: 100%;
        box-sizing: content-box;
        object-fit: cover;
        background-color: #d9d9d9;
      `;

      Title = styled.a`
        display: block;
        padding-top: 0.5em;
        font-size: 3.5vh;
        font-weight: 600;
        text-align: center;
        color: inherit;
        font-family: "Smooch Sans", sans-serif;

        ${mediaQueries.mobile} {
          font-size: 5vh;
        }
      `;

      ByLine = styled.p`
        display: block;
        font-size: 1.5vh;
        font-weight: 200;
        text-align: center;
        padding-bottom: 0.5em;
        color: inherit;
        font-family: "Poppins", sans-serif;
      `;
    }
  }
  getStyle(props.style);
  if (props.style == "one") {
    return (
      <Container>
        <Image src={props.article_image}></Image>
        <ArticleInfo>
          <Title>
            <TitleText>{props.article_title}</TitleText>
          </Title>
          <ByLine>
            <BylineText> By {props.article_byline}</BylineText>
          </ByLine>
        </ArticleInfo>
      </Container>
    );
  } else {
    return (
      <Container>
        <ArticleImage>
          <a href={props.article_url}>
            <Image src={props.article_image}></Image>
          </a>
        </ArticleImage>
        <ArticleInfo>
          <Title href={props.article_url}>{props.article_title}</Title>
          <ByLine>
            {ByLineText}
            {props.article_byline}
          </ByLine>
        </ArticleInfo>
      </Container>
    );
  }
}

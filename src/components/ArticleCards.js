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
        margin: auto;
        box-sizing: border-box;
        background-color: #${getBackground(props.color)};
        height: fit-content;
        padding: 1em;
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

      Title = styled.a`
        flex: 2;
        width: 50%;
        font-size: 50px;
        font-weight: 700;
        text-align: left;
        line-height: 1em;
        text-decoration: none;
        color: inherit;
        font-family: "Smooch Sans", sans-serif;
        padding: 0.5em 0 0.5em 0;
        ${mediaQueries.mobile} {
          font-size: 20px;
        }
      `;

      // TitleText = styled.p`
      //   justify-content: center;
      //   align-items: center;

      //   margin-top: 20%;
      //   margin-bottom: 10%;
      // `;

      ByLine = styled.div`
        flex: 1;
        width: 50%;
        color: inherit;

        font-size: 24px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;

        line-height: 1.5em;
        text-align: center;

        margin-top: 5%;
        margin-bottom: 5%;
        padding: 0.5em 0 0.5em 0;

        ${mediaQueries.mobile} {
          font-size: 15px;
        }
      `;

      // BylineText = styled.p`
      //   justify-content: center;
      //   align-items: center;

      //   margin-left: 40%;
      //   height: 100%;
      // `;
    }

    if (style == "two") {
      if (props.float == "right") {
        Container = styled.div`
          position: relative;
          display: flex;
          height: fit-content;
          margin: auto;
          box-sizing: border-box;
          background-color: #${getBackground(props.color)};
          padding: 0.7em;
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
          flex-direction: row-reverse;
          width: 100%;
          height: fit-content;
          margin: auto;
          box-sizing: border-box;
          background-color: #${getBackground(props.color)};
          padding: 0.7em;
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
        padding: 1em 0.5em 0 0.5em;
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        line-height: 1em;
        color: inherit;
        font-family: "Smooch Sans", sans-serif;
        ${mediaQueries.mobile} {
          font-size: 20px;
        }
      `;

      ByLine = styled.p`
        display: block;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        color: inherit;
        font-family: "Poppins", sans-serif;
        white-space: pre-line;
        ${mediaQueries.mobile} {
          font-size: 12px;
        }
      `;
    }
    ByLineText = "By\n";

    //STYLE THREE
    if (style == "three") {
      Container = styled.div`
        position: relative;
        /* width: 100%; */
        height: fit-content;
        margin: auto;
        box-sizing: content-box;
        background-color: #${getBackground(props.color)};
        padding: 0.7em;

        ${mediaQueries.mobile} {
          width: 80%;
        }
      `;

      ArticleInfo = styled.div`
        display: block;
        margin: auto;
        color: #ffffff;
        line-height: 2.5em;
        ${mediaQueries.mobile} {
          line-height: 1em;
          font-size: 30px;
        }
      `;

      ArticleImage = styled.div`
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
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        color: inherit;
        font-family: "Smooch Sans", sans-serif;

        ${mediaQueries.mobile} {
          font-size: 18px;
        }
      `;

      ByLine = styled.p`
        display: block;
        font-size: 24px;
        font-weight: 200;
        text-align: center;
        padding-bottom: 0.5em;
        color: inherit;
        font-family: "Poppins", sans-serif;
        ${mediaQueries.mobile} {
          font-size: 15px;
        }
      `;
    }
  }

  getStyle(props.style);

  if (props.style == "one") {
    return (
      <Container>
         <a href={props.article_url}>
            <Image src={props.article_image}></Image>
          </a>
        <ArticleInfo>
          <Title href={props.article_url}>
            {props.article_title}
          </Title>
          <ByLine>
            By {props.article_byline}
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
          <Title href={props.article_url}> {props.article_title}</Title>
          <ByLine>
            {ByLineText}
            {props.article_byline}
          </ByLine>
        </ArticleInfo>
      </Container>
    );
  }
}

import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";


let Container = styled.div``;
let ArticleInfo = styled.div``;
let Image = styled.img``;
let Title = styled.a``;
let ByLine = styled.p``;
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
   
     Container = styled.div`
       position: relative;
       max-width: 100%;
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
     ArticleInfo = styled.div`
       display: block;
       margin: auto;
       /* width: 303px; */
       /* height: fit-content; */


       color: #ffffff;
       line-height: 2em;


       ${mediaQueries.mobile} {
         width: 100%;
       }
     `;
     Image = styled.img`
       display: block;
       width: 100%;
       max-width: 100%;
       height: 100%;
       margin: auto;
       box-sizing: content-box;
       object-fit: cover;
       z-index: 10;
       background-color: #d9d9d9;
     `;


     Title = styled.a`
       display: block;
       padding-top: 1em;
       font-size: 40px;
       font-weight: 600;
       text-align: center;
       text-decoration: none;
       color: inherit;
       font-family: "Smooch Sans", sans-serif;
     `;


     ByLine = styled.p`
       display: block;
       font-size: 16px;
       font-weight: 600;
       padding-bottom: 1em;
       text-align: center;
       color: inherit;
       font-family: "Poppins", sans-serif;
     `;
 }
 getStyle(props.style);
 return (
   <Container>
     <a href={props.article_url}>
       <Image src={props.article_image}></Image>
     </a>
     <ArticleInfo>
       <Title href={props.article_url}>{props.article_title}</Title>
       <ByLine> By {props.article_byline}</ByLine>
     </ArticleInfo>
   </Container>
 );
}

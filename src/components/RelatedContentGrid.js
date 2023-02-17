import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import Card from "./ArticleCards";

const OuterContainer = styled.div`
    max-width: 100vw;
    margin-top: 5em;
    position: relative;
`;

const Grid = styled.div`
    max-width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    column-gap: 3em;
    row-gap: 3em;
    justify-items: center;

    ${mediaQueries.mobile} {
        width: 80vw;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin: auto;
        align-items: center;
        column-gap: 2em;
        row-gap: 1em;
    }
`;

export default function RelatedContentGrid(props) {
    return(
    <>
        <OuterContainer>
            <Grid>
            {props && props.related
                  ? props.related.map((item) => {
                      return (
                          <Card
                          article_title={item.article_title}
                          article_byline={item.article_byline}
                          article_image={item.article_image}
                          article_url={item.article_url}
                          color = {item.color}
                          style = {item.style}
                      />
                      );
                  })
              : null}
            </Grid>
        </OuterContainer>
    </>
    );
}
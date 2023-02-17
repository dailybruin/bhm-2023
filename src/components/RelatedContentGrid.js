import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import Card from "./ArticleCard";

const OuterContainer = styled.div`
    max-width: 100vw;
`;

const Grid = styled.div`
    width: 90vw;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3,1fr);
    column-gap: 3em;
    row-gap: 3em;
    justify-items: center;

    ${mediaQueries.mobile} {
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
                          color={item.color}
                      />
                      );
                  })
              : null}
            </Grid>
        </OuterContainer>
    </>
    );
}
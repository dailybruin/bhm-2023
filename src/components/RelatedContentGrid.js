import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import Card from "./ArticleCard";

const OuterContainer = styled.div`
    max-width: 100vw;
    overflow: visible;
`;

const Grid = styled.div`
    display: grid;
    margin: auto;
    max-width: 100%;
    grid-template-columns: repeat(3,3fr);
    overflow: visible;
    column-gap: 134.88px;
    row-gap: 108.13px;
    padding-left: 87.44px;
    padding-right: 87.44px;
    ${mediaQueries.mobile} {
        display: grid;
        grid-template-columns: repeat(2,4fr);
        margin: auto;
        align-items: center;
        column-gap: 36.21px;
        row-gap: 38.96px;
        padding: 1em;
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
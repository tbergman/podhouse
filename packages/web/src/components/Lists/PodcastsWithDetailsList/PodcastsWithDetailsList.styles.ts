import styled from "@emotion/styled";

export const PodcastsWithDetailsListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const PodcastsWithDetailsListHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const PodcastsWithDetailsListSection = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
  @media screen and (min-width: 500px) {
    justify-content: flex-start;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, max-content);
    grid-gap: 20px;
  }
  @media screen and (min-width: 800px) {
    justify-content: flex-start;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, max-content);
    grid-gap: 20px;
  }
`;

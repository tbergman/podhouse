import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
  }
`;

export const FooterBrandsContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: center;
`;
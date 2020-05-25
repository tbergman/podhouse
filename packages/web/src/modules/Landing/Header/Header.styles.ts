import { styled } from "../../../system/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) minmax(max-content, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 55px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderLinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    width: auto;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
`;

export const HeaderLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const HeaderButtonContainer = styled.div`
  width: auto;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: flex-end;

  @media screen and (min-width: 800px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    align-self: center;
    justify-self: flex-end;
  }
`;

export const HeaderButton = styled.button`
  width: 120px;
  height: 40px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  cursor: pointer;
  outline: none;
  grid-area: "button";

  :hover {
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;
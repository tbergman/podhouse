import { styled } from "../../system/theme";

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-template-rows: 140px;
  grid-column-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 200px;
    grid-column-gap: 20px;
  }
`;

export const FeaturedAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
`;

export const FeaturedDetailsContainer = styled.div`
  width: auto;
  height: auto;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  align-items: flex-start;
  justify-items: flex-start;

  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    grid-template-rows: repeat(3, max-content);
    align-items: flex-start;
    justify-items: flex-start;
  }
`;

export const FeaturedName = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

export const FeaturedAuthor = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.strongestGray};
`;

export const FeaturedDescription = styled.p`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.midGray};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const FeaturedBadge = styled.a`
  width: fit-content;
  padding: 10px;
  height: 25px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-decoration: none;
`;
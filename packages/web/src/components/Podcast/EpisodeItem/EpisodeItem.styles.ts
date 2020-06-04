import { styled } from "../../../system/theme";

export const EpisodeItemContainer = styled.div`
  width: 100%;
  min-width: 50px;
  max-width: 140px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
  grid-row-gap: 10px;
  align-items: center;
  justify-items: flex-start;
`;

export const EpisodeItemAvatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  cursor: pointer;
`;

export const EpisodeItemName = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const EpisodeItemAuthor = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.midGray};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
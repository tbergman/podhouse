import { styled } from "../../../../system/theme";

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;

export const SettingsLoginLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;
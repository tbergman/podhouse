import styled from "@emotion/styled";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 30px;
`;

export const AuthLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
`;

export const AuthFormContainer = styled.form`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
`;

export const AuthLinksContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  justify-self: center;
`;

export const AuthGetStartedButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 10px;
`;

export const AuthTextContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-self: center;
  justify-self: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-center;
`;

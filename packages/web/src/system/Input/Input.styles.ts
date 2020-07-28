import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

import { InputContainerProps, InputFieldProps } from "./Input.types";

type ContainerProps = InputContainerProps & StyleProps;
type FieldProps = InputFieldProps & StyleProps;

export const InputContainer = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputStyled = styled.input<FieldProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => height || 50}px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.backgroundSecondary};
  border: ${({ theme }) => `1px solid ${theme.backgroundSecondary}`};
  box-sizing: border-box;
  border-radius: 5px;
  text-indent: 20px;
  outline: none;
  letter-spacing: normal;
  word-spacing: normal;

  :-moz-placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.tertiary};
    text-indent: 20px;
  }
`;

import React, { useRef } from "react";
import { useButton } from "@react-aria/button";

import StyledButton from "./Button.styles";

import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);

  const {
    type,
    variant,
    size,
    onClick,
    submitting,
    disabled,
    children,
  } = props;

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      submitting={submitting}
      disabled={submitting || disabled}
      ref={ref}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

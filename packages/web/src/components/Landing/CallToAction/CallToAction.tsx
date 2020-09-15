import React from "react";
import { useRouter } from "next/router";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "../Landing.styles";

import Button from "src/system/Button/Button";

const CallToAction = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <LandingSubTitle>Totally yours</LandingSubTitle>
        <LandingParagraph>
          Although there are some premium features planned,
          <strong>we will always be free</strong>. You won't need to pay
          anything in order to listen to your favorite podcasts with us.
        </LandingParagraph>
      </LandingGridContentContainer>

      <Button
        type="button"
        variant="primary"
        size="normal"
        onClick={handleStart}
        width={120}
      >
        Get started
      </Button>
    </LandingGridContainer>
  );
};

export default CallToAction;

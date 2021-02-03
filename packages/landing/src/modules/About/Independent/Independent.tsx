import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const Independent = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading
        color="#101010"
        as="h2"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="center"
      >
        Independent
      </Heading>

      <Text color="#101010" lineHeight="30px" textAlign="center">
        Podhouse has a mission to deliver podcasts for everyone, and a part of
        this goal is that we are not currently interested in raising funds or
        taking any investment. We believe that an independent startup can grow
        faster and focused in the long-time. Working independently, we can be a
        more open startup in the future, share our revenue, talk more with users
        about what should be improved, and to our advertisers as how we can
        deliver more targeted-ads.
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Independent;

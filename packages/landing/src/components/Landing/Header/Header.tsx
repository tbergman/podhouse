import React from "react";
import NextLink from "next/link";
import {
  Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderSignInContainer,
} from "./Header.styles";

import PodhouseLogo from "../../../../public/images/logo/PodhouseLogo.svg";

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <NextLink href="/" as="/">
        <Link aria-label="Podhouse logo" href="/">
          <PodhouseLogo />
        </Link>
      </NextLink>
    </HeaderLogoContainer>

    <HeaderLinksContainer>
      <NextLink href="/about" as="/about">
        <Link
          aria-label="About"
          href="/about"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          About
        </Link>
      </NextLink>

      <NextLink href="/for-podcasters" as="/for-podcasters">
        <Link
          aria-label="For Podcasters"
          href="/for-podcasters"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          For Podcasters
        </Link>
      </NextLink>

      <NextLink href="/blog" as="/blog">
        <Link
          aria-label="Blog"
          href="/blog"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          Blog
        </Link>
      </NextLink>
    </HeaderLinksContainer>

    <HeaderSignInContainer>
      <Menu>
        <MenuButton
          className="button"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          size="md"
        />
        <MenuList>
          <MenuItem>
            <NextLink href="/about" as="/about">
              <Link
                aria-label="About"
                href="/about"
                fontSize={16}
                lineHeight="30px"
                fontWeight="400"
              >
                About
              </Link>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/for-podcasters" as="/for-podcasters">
              <Link
                aria-label="For Podcasters"
                href="/for-podcasters"
                fontSize={16}
                lineHeight="30px"
                fontWeight="400"
              >
                For Podcasters
              </Link>
            </NextLink>
          </MenuItem>

          <MenuItem>
            <NextLink href="/blog" as="/blog">
              <Link
                aria-label="Blog"
                href="/blog"
                fontSize={16}
                lineHeight="30px"
                fontWeight="400"
              >
                Blog
              </Link>
            </NextLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Link className="button-800" href="https://play.podhouse.app">
        <Button
          type="button"
          size="md"
          width={120}
          bgColor="#101010"
          color="#ffffff"
          fontWeight="400"
          _hover={{ bg: "#101010" }}
          _active={{
            bg: "#101010",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          Get started
        </Button>
      </Link>
    </HeaderSignInContainer>
  </HeaderContainer>
);

export default Header;

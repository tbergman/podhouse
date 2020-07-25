import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Headphones, Search, User, Heart } from "react-feather";

import {
  NavigationContainer,
  NavigationItemContainer,
  NavigationItemLink,
} from "./Navigation.styles";

import useTheme from "src/system/useTheme";

const Navigation = () => {
  const themeState = useTheme();
  const router = useRouter();

  const onActiveRouteIcon = (route: string) => {
    if (themeState.dark) {
      return router.pathname == route ? "#FFF" : "#B7B7B7";
    }

    return router.pathname == route ? "#101010" : "#B7B7B7";
  };

  const onActiveRouteLink = (route: string) => {
    return router.pathname == route ? true : false;
  };

  return (
    <NavigationContainer>
      <NavigationItemContainer className="browse">
        <Link href="/app" passHref>
          <Home size={16} color={onActiveRouteIcon("/app")} strokeWidth={1.5} />
        </Link>

        <Link href="/app" passHref>
          <NavigationItemLink active={onActiveRouteLink("/app")}>
            Browse
          </NavigationItemLink>
        </Link>
      </NavigationItemContainer>

      <NavigationItemContainer className="podcasts">
        <Link href="/app/podcasts" passHref>
          <Headphones
            size={16}
            color={onActiveRouteIcon("/app/podcasts")}
            strokeWidth={1.5}
          />
        </Link>

        <Link href="/app/podcasts" passHref>
          <NavigationItemLink active={onActiveRouteLink("/app/podcasts")}>
            Podcasts
          </NavigationItemLink>
        </Link>
      </NavigationItemContainer>

      <NavigationItemContainer className="favorites">
        <Link href="/app/favorites" passHref>
          <Heart
            size={16}
            color={onActiveRouteIcon("/app/favorites")}
            strokeWidth={1.5}
          />
        </Link>

        <Link href="/app/favorites" passHref>
          <NavigationItemLink active={onActiveRouteLink("/app/favorites")}>
            Favorites
          </NavigationItemLink>
        </Link>
      </NavigationItemContainer>

      <NavigationItemContainer className="search">
        <Link href="/app/search" passHref>
          <Search
            size={16}
            color={onActiveRouteIcon("/app/search")}
            strokeWidth={1.5}
          />
        </Link>

        <Link href="/app/search" passHref>
          <NavigationItemLink active={onActiveRouteLink("/app/search")}>
            Search
          </NavigationItemLink>
        </Link>
      </NavigationItemContainer>

      <NavigationItemContainer className="settings">
        <Link href="/app/settings" passHref>
          <User
            size={16}
            color={onActiveRouteIcon("/app/settings")}
            strokeWidth={1.5}
          />
        </Link>

        <Link href="/app/settings" passHref>
          <NavigationItemLink active={onActiveRouteLink("/app/settings")}>
            User
          </NavigationItemLink>
        </Link>
      </NavigationItemContainer>
    </NavigationContainer>
  );
};

export default Navigation;

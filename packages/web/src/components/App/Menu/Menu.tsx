import * as React from "react";
import Scrollbars from "react-custom-scrollbars";

import Navigation from "./Navigation/Navigation";

import {
  MenuContainer,
  MenuInsideContainer,
  MenuLogoContainer,
  MenuAvatarContainer,
} from "./Menu.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Menu = () => (
  <MenuContainer>
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <MenuInsideContainer>
        <MenuLogoContainer>Podhouse</MenuLogoContainer>
        <Navigation />
        <MenuAvatarContainer src={avatar} />
      </MenuInsideContainer>
    </Scrollbars>
  </MenuContainer>
);

export default Menu;

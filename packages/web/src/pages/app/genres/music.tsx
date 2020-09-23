import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Music from "src/modules/App/Genres/Music/Music";

const Index = () => <Music />;

Index.getLayout = getLayout;

Index.getInitialProps = async () => ({
  namespacesRequired: [
    "common",
    "getstarted",
    "header",
    "menu",
    "player",
    "podcast",
    "settings",
  ],
});

export default Index;

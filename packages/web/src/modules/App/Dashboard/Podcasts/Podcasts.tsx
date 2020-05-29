import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Row from "../../../../components/Row/Row";

import { PodcastsContainer } from "./Podcasts.styles";

const items = [
  {
    id: 1,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 2,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 3,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 4,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Podcasts: React.FC = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <PodcastsContainer>
      <Row title="Podcasts" items={items} />
    </PodcastsContainer>
  </Scrollbars>
);

export default Podcasts;

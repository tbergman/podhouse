import * as React from "react";
import Scrollbars from "react-custom-scrollbars";

import PodcastsWithDetails from "src/components/Lists/PodcastsWithDetails/PodcastsWithDetails";

import { SearchContainer } from "./Search.styles";

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

const Search = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SearchContainer>
      <PodcastsWithDetails title="Search" items={items} />
    </SearchContainer>
  </Scrollbars>
);

export default Search;

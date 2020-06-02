import React from "react";

import {
  PodcastItemContainer,
  PodcastItemAvatar,
  PodcastItemName,
  PodcastItemAuthor,
} from "./PodcastItem.styles";

interface PodcastItemProps {
  podcast: {
    name: string;
    author: string;
    avatar: string;
  };
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const { name, author, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastItemContainer>
      <PodcastItemAvatar src={avatar} alt={imageAlt} />
      <PodcastItemName href="/app/episode/123">{name}</PodcastItemName>
      <PodcastItemAuthor>{author}</PodcastItemAuthor>
    </PodcastItemContainer>
  );
};

export default PodcastItem;

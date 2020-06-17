import React from "react";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
  EpisodeItemAuthor,
} from "./EpisodeItem.styles";

interface EpisodeItemProps {
  episode: {
    name: string;
    author: string;
    description: string;
    avatar: string;
    publishedDate: string;
  };
}

const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  const { name, author, avatar } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={avatar} alt={imageAlt} />
      <EpisodeItemName>{name}</EpisodeItemName>
      <EpisodeItemAuthor>{author}</EpisodeItemAuthor>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;

import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonPodcastContainer,
  SkeletonPodcastAvatar,
  SkeletonPodcastDetails,
  SkeletonPodcastNameTitle,
  SkeletonPodcastFavoriteContainer,
} from "./SkeletonPodcast.styles";

const SkeletonPodcast = () => (
  <SkeletonPodcastContainer>
    <SkeletonPodcastAvatar>
      <Skeleton
        width="40px"
        height="40px"
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
      />
    </SkeletonPodcastAvatar>

    <SkeletonPodcastDetails>
      <SkeletonPodcastNameTitle>
        <Skeleton
          width="100%"
          height="20px"
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
        />
      </SkeletonPodcastNameTitle>

      <SkeletonPodcastNameTitle>
        <Skeleton
          width="100%"
          height="20px"
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
        />
      </SkeletonPodcastNameTitle>

      <SkeletonPodcastFavoriteContainer>
        {/* <Heart
          className="like-button"
          size={16}
          strokeWidth={1.7}
          color="#101010"
          style={iconStyle}
          onClick={() => {}}
        /> */}
      </SkeletonPodcastFavoriteContainer>
    </SkeletonPodcastDetails>
  </SkeletonPodcastContainer>
);

export default SkeletonPodcast;

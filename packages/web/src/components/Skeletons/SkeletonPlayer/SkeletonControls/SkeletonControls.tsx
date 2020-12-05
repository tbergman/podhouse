import React from "react";
import { Play, RotateCcw, RotateCw } from "react-feather";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Skeleton,
} from "@chakra-ui/react";

import { usePlayerContext } from "src/player/Player";

import {
  SkeletonControlsContainer,
  SkeletonControlsButtonsContainer,
  SkeletonControlsSliderContainer,
  SkeletonControlsTime,
} from "./SkeletonControls.styles";

const iconStyle = { cursor: "pointer" };

const SkeletonControls = () => {
  const { initial, loading } = usePlayerContext();

  const onRenderTime = () => {
    if (initial) {
      return null;
    } else if (loading) {
      return (
        <Skeleton
          width="30px"
          height="15px"
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
        />
      );
    }
  };

  return (
    <SkeletonControlsContainer>
      <SkeletonControlsButtonsContainer>
        <RotateCcw
          size={18}
          color="#101010"
          style={iconStyle}
          strokeWidth={2}
        />

        <Play size={28} color="#101010" strokeWidth={1.7} style={iconStyle} />

        <RotateCw size={18} color="#101010" style={iconStyle} strokeWidth={2} />
      </SkeletonControlsButtonsContainer>

      <SkeletonControlsSliderContainer>
        <SkeletonControlsTime>{onRenderTime()}</SkeletonControlsTime>

        <Slider defaultValue={0} value={0}>
          <SliderTrack>
            <SliderFilledTrack bg="#101010" />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SkeletonControlsTime>{onRenderTime()}</SkeletonControlsTime>
      </SkeletonControlsSliderContainer>
    </SkeletonControlsContainer>
  );
};

export default SkeletonControls;

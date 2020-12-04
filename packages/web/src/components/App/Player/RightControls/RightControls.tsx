import React from "react";
import { Clock, List } from "react-feather";

import { RightControlsContainer } from "./RightControls.styles";

import Volume from "./Volume/Volume";

import { useQueueContext } from "src/context/Queue/Queue";
import { useRateContext } from "src/context/Rate/Rate";

import { PlayerEpisode } from "src/player/Player.types";

const iconStyle = { cursor: "pointer" };

interface RightControlsProps {
  ready: boolean;
  volume: number;
  muted: boolean;
  episode: PlayerEpisode | null;
  onVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMute: () => void;
}

const RightControls = ({
  ready,
  volume,
  muted,
  episode,
  onVolume,
  onMute,
}: RightControlsProps) => {
  const [, handleQueue] = useQueueContext();
  const [, handleRate] = useRateContext();

  if (!episode) return null;

  return (
    <RightControlsContainer>
      <List
        size={20}
        strokeWidth={1.7}
        color="#101010"
        style={iconStyle}
        onClick={handleQueue}
      />

      <Clock
        size={20}
        strokeWidth={1.7}
        color="#101010"
        style={iconStyle}
        onClick={handleRate}
      />

      <Volume
        ready={ready}
        volume={volume}
        muted={muted}
        onVolume={onVolume}
        onMute={onMute}
      />
    </RightControlsContainer>
  );
};

export default RightControls;

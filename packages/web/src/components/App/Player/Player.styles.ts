import styled from "@emotion/styled";

export const PlayerContainer = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 59px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 14px 1fr;
  grid-column-gap: 20px;
  grid-area: "player";
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;

  [data-reach-slider] {
    width: 100%;
    height: 7px;
  }

  [data-reach-slider][data-disabled] {
    width: 100%;
    height: 7px;
  }

  [data-reach-slider-track] {
    background: #f3f3f3;
    height: 7px;
  }

  [data-reach-slider-input][data-orientation="horizontal"] {
    width: 100%;
    height: 7px;
  }

  /* [data-reach-slider-track-highlight][data-orientation="horizontal"] {
    width: 100%;
    height: 7px;
    background: #101010;
  } */

  [data-reach-slider-range] {
    width: 100%;
    height: 7px;
    border-radius: inherit;
    background: #101010;
  }

  [data-reach-slider-handle] {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    background: white;
    border-radius: 10px;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    height: auto;
    max-height: 140px;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    grid-template-columns: 1fr minmax(auto, 390px) 1fr;
    grid-template-rows: 1fr;
    grid-area: "player";
    padding: 15px 30px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    background: #ffffff;
    z-index: 1;
    cursor: default;
    position: inherit;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: 1fr minmax(auto, 390px) 1fr;
    grid-template-rows: 1fr;
    position: inherit;
  }
`;

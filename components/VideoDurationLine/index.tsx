import React, { useState } from "react";
import styles from "styles/VideoDurationLine.module.scss";
import styled, { keyframes } from "styled-components";
import { PlayArrowIcon } from "icons";
interface VideoDurationLineProps {
  numberOfLine: number;
  lineWidth: number;
  videoDuration: number;
  // playState: boolean;
}
const DEFAULT_LINE_HEIGHT = "2.5px";

function VideoDurationLine({
  numberOfLine,
  lineWidth,
  videoDuration,
}: // playState,
VideoDurationLineProps): React.ReactElement {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const VIDEO_LINE_WIDTH = 300;
  const MAX_PERCENT = 100;
  // EX: 20%
  const PERCENTAGE_OF_VIDEO_IN_ONE_SECOND = 100 / videoDuration;
  // EX  width: 20px
  const DISTANCE_RUN_IN_ONE_SECOND =
    (lineWidth * PERCENTAGE_OF_VIDEO_IN_ONE_SECOND) / 100;
  DISTANCE_RUN_IN_ONE_SECOND;

  const caculateStepInKeyFrames = (step: number, max: number): number[] => {
    const stepsArray = [0];
    let count = 0;
    while (count < max) {
      count += step;
      if (count > max) {
        break;
      }
      stepsArray.push(count);
    }
    // If last step not equal max -> set it to max
    stepsArray[stepsArray.length - 1] = max;
    return stepsArray;
  };

  const createVideoRunningKeyFrames = (
    percen: number[],
    width: number[]
  ): string => {
    let keyFrameString = "",
      frames = "";
    percen.forEach((el, index) => {
      frames = `${el}% { width: ${width[index]}px; }`;
      keyFrameString += frames;
    });
    return keyFrameString;
  };

  const percenStep = caculateStepInKeyFrames(
    PERCENTAGE_OF_VIDEO_IN_ONE_SECOND,
    MAX_PERCENT
  );
  const widthStep = caculateStepInKeyFrames(
    DISTANCE_RUN_IN_ONE_SECOND,
    lineWidth
  );

  const videoKeyFrames = keyframes`
  ${createVideoRunningKeyFrames(percenStep, widthStep)}
  `;
  console.log(
    "videoKeyFrames",
    createVideoRunningKeyFrames(percenStep, widthStep)
  );

  const LineRun = styled.div`
    position: absolute;
    width: 0px;
    height: ${DEFAULT_LINE_HEIGHT};
    background-color: white;
    opacity: 1;
    top: 0;
    animation-name: ${videoKeyFrames};
    animation-duration: ${videoDuration}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  `;
  // animation-play-state: ${isPlaying ? "running" : "paused"};

  return (
    <div className={styles.container}>
      {Array.from(Array(numberOfLine).keys()).map((_, index) => (
        <div style={{ position: "relative" }} key={index}>
          <div
            className={styles.line}
            style={{ width: `${lineWidth}px`, height: DEFAULT_LINE_HEIGHT }}
          ></div>
          {index == 0 ? <LineRun /> : ""}
        </div>
      ))}

      <div className={styles.video__action}>
        <PlayArrowIcon
          onClick={handlePlayVideo}
          className={`${isPlaying ? styles.play : styles.paused}`}
        />
      </div>
    </div>
  );
}

export default VideoDurationLine;

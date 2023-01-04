import VideoDurationLine from "components/VideoDurationLine";
import React, { useEffect, useRef } from "react";
import styles from "styles/Video.module.scss";

function Video() {
  const VIDEO_WIDTH = 330;
  const NUMBER_OF_VIDEO = 5;
  const TOTAL_LINE_WIDTH = VIDEO_WIDTH * 0.95;
  const LINE_WIDTH = TOTAL_LINE_WIDTH / NUMBER_OF_VIDEO;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Instagram</div>
        <div>X</div>
      </div>
      <div className={styles.videoContainer}>
        <div className={styles.video}>
          <div className={styles.video__header}>
            <VideoDurationLine
              numberOfLine={NUMBER_OF_VIDEO}
              lineWidth={LINE_WIDTH}
            />
          </div>
          <video controls id="autoplay">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;

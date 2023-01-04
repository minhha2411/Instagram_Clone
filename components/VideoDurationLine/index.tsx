import React from "react";
import styles from "styles/VideoDurationLine.module.scss";

interface VideoDurationLineProps {
  numberOfLine: number;
  lineWidth: number;
}
const DEFAULT_LINE_HEIGHT = "2.5px";

function VideoDurationLine({
  numberOfLine,
  lineWidth,
}: VideoDurationLineProps): React.ReactElement {
  return (
    <div className={styles.container}>
      {Array.from(Array(numberOfLine).keys()).map((_, index) => (
        <div
          key={index}
          className={styles.line}
          style={{ width: `${lineWidth}px`, height: DEFAULT_LINE_HEIGHT }}
        ></div>
      ))}
    </div>
  );
}

export default VideoDurationLine;

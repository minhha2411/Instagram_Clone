import React from "react";
import styles from "styles/Dot.module.scss";

interface DotProps {
  quantity: number;
  currentImageIndex: number;
}

function Dot({ quantity, currentImageIndex }: DotProps): React.ReactElement {
  return (
    <div className={styles.container}>
      {Array.from(Array(quantity).keys()).map((_, index) => (
        <div
          className={`${styles.dot} ${
            index === currentImageIndex ? styles.activeDot : ""
          }`}
          key={index}
        ></div>
      ))}
    </div>
  );
}

export default Dot;

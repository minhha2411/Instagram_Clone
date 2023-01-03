import { ArrowBackIosNewIcon, ArrowForwardIosIcon } from "icons";
import ArrowProps from "interface/Arrow";
import React from "react";
import styles from "styles/Arrow.module.scss";

function Arrow({
  isForwardIcon,
  handleArrowClick,
  isChangePosition = false,
}: ArrowProps): React.ReactElement {
  return (
    <>
      {isForwardIcon ? (
        <div
          className={`${styles.forwardIcon} ${
            isChangePosition ? styles.position : ""
          }`}
          onClick={handleArrowClick}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      ) : (
        <div
          className={`${styles.previewIcon} ${
            isChangePosition ? styles.position : ""
          }`}
          onClick={handleArrowClick}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </div>
      )}
    </>
  );
}

export default Arrow;

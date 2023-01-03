import React from "react";
import { ArrowBackIosNewIcon, ArrowForwardIosIcon } from "icons";
import styles from "styles/ArrowCard.module.scss";

interface ArrowCardProps {
  showPreviousIcon?: boolean;
  showForwardIcon?: boolean;
  handlePreviousIconClick?: () => void;
  handleForwardIconClick?: () => void;
  isChangePosition: boolean;
}

function ArrowCard({
  showPreviousIcon,
  showForwardIcon,
  handlePreviousIconClick,
  handleForwardIconClick,
  isChangePosition = false,
}: ArrowCardProps): React.ReactElement {
  return (
    <>
      {showPreviousIcon ? (
        <div
          className={`${styles.previewIcon} ${
            isChangePosition ? styles.position : ""
          }`}
          onClick={handlePreviousIconClick}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </div>
      ) : (
        ""
      )}
      {showForwardIcon ? (
        <div
          className={`${styles.forwardIcon} ${
            isChangePosition ? styles.position : ""
          }`}
          onClick={handleForwardIconClick}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ArrowCard;

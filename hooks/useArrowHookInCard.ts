import React, { useState } from "react";

interface ArrowHookProps {
  numberOfImages: number;
}

function useArrowHookInCard({ numberOfImages }: ArrowHookProps) {
  const [showForwardIcon, setShowForwardIcon] = useState<boolean>(true);
  const [showPreviousIcon, setShowPreviousIcon] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleForwardIconClick = () => {
    let index = currentImageIndex + 1;
    setCurrentImageIndex(index);
    if (index > 0) {
      setShowPreviousIcon(true);
    }
    // If user see last image -> hide forward icon
    if (index === numberOfImages - 1) {
      setShowForwardIcon(false);
    }
    // If user see any image other than last image -> show forward icon
    if (index < numberOfImages - 1) {
      setShowForwardIcon(true);
    }
  };

  const handlePreviousIconClick = () => {
    let index = currentImageIndex - 1;
    setCurrentImageIndex(index);
    if (index < numberOfImages - 1) {
      setShowForwardIcon(true);
    }
    // If user see from second image and beyond -> show previous icon
    if (index > 0) {
      setShowPreviousIcon(true);
    }
    // If user see first image -> hide previous icon
    if (index === 0) {
      setShowPreviousIcon(false);
    }
  };

  return {
    currentImageIndex,
    showForwardIcon,
    showPreviousIcon,
    handlePreviousIconClick,
    handleForwardIconClick,
  };
}

export default useArrowHookInCard;

import { useState } from "react";

function useCardActions() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleClickLike = () => {
    setIsLiked(!isLiked);
  };
  const handleClickBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return {
    isLiked,
    isBookmarked,
    handleClickLike,
    handleClickBookmark,
  };
}

export default useCardActions;

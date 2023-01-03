import { useState } from "react";

function useArrowHookInStory() {
  const [isForwardIcon, setIsForward] = useState<boolean>(true);

  const handleArrowClickInStory = () => {
    setIsForward(!isForwardIcon);
  };

  return { isForwardIcon, handleArrowClickInStory };
}

export default useArrowHookInStory;

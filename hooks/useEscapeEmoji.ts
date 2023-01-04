import { useEffect } from "react";

const useEscapeEmoji = (setShowEmojiPicker: any) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event?.key === "Escape") {
        setShowEmojiPicker(false);
      }
    };
    // Bind the event listener
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useEscapeEmoji;

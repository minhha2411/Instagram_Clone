import { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

function useMessageHook() {
  const [canPost, setCanPost] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleClickEmoji = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleChangeInputMessage = (e: any) => {
    setShowEmojiPicker(false);
    setInputMessage(e.target.value);
    if (e.target.value) {
      setCanPost(true);
      return;
    }
    setCanPost(false);
  };
  const handleOnEmojiClick = (emojiData: EmojiClickData) => {
    setInputMessage(inputMessage + emojiData?.emoji);
  };

  return {
    canPost,
    showEmojiPicker,
    inputMessage,
    handleClickEmoji,
    handleChangeInputMessage,
    handleOnEmojiClick,
    setShowEmojiPicker,
  };
}

export default useMessageHook;

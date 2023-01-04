import { Avatar, Input } from "antd";
import {
  BookmarkBorderIcon,
  BookmarkIcon,
  ChatBubbleOutlineIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  MoreHorizIcon,
  SendOutlinedIcon,
  SentimentSatisfiedAltIcon,
} from "icons";
import Image from "next/image";
import React, { useRef } from "react";
import styles from "styles/Card.module.scss";
import image from "images/1099264.jpg";
import Dot from "components/Dot";
import useArrowHookInCard from "hooks/useArrowHookInCard";
import ArrowCard from "components/ArrowCard";
import EmojiPicker from "emoji-picker-react";
import useClickOutSideEmoji from "hooks/useClickOutSideEmoji";
import useEscapeEmoji from "hooks/useEscapeEmoji";
import CardProps from "interface/Card";
import { themeForCard } from "utils";
import Theme from "Themes/Card";
import useMessageHook from "hooks/useMessageHook";
import useCardActions from "hooks/useCardActions";

function Card({
  imageNumber = 6,
  listImagesUrl = [
    "https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg",
    "https://st4.depositphotos.com/21607914/24096/i/450/depositphotos_240965200-stock-photo-south-korean-singer-actress-lee.jpg",
    "https://media.gettyimages.com/id/1271063584/photo/iu-attends-ambassador-appointment-ceremony-of-the-nation-tax-administration-of-korea-at.jpg?s=612x612&w=gi&k=20&c=jZA_kDfVC3kFtBap7X-fwUAQe4UtNmCzQyNWy0oi5zc=",
    "https://media.gettyimages.com/id/1209823842/photo/iu-is-seen-upon-departing-at-incheon-international-airport-on-february-18-2020-in-incheon.jpg?s=612x612&w=gi&k=20&c=z-F0k86c2MIJ7gQ0WL7RbjwiT697mFYEDqMD4vp0Evg=",
    "https://bloganchoi.com/wp-content/uploads/2022/03/iu-xinh-dep.jpg",
    "https://info-imgs.vgcloud.vn/2022/08/16/02/than-tuong-cua-nhieu-than-tuong-kpop-iu-lai-co-moi-quan-he-nhu-nguoi-la-voi-em-trai-8.jpg",
  ],
  avatarImage = "https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg",
  nickName = "bok.doll2",
  firstLikePerson = "jonas_tsai_tw",
  firstComment = "모든날 다 좋은날🐶💕",
  totalComments = 23,
  postTime = 2,
}: CardProps): React.ReactElement {
  const wrapperRef = useRef(null);
  // Logic in like, share, bookmark section
  const { isLiked, isBookmarked, handleClickLike, handleClickBookmark } =
    useCardActions();
  // Logic in comment section
  const {
    canPost,
    showEmojiPicker,
    inputMessage,
    handleClickEmoji,
    handleChangeInputMessage,
    handleOnEmojiClick,
    setShowEmojiPicker,
  } = useMessageHook();
  // Logic in card image, video transition
  const {
    currentImageIndex,
    showForwardIcon,
    showPreviousIcon,
    handlePreviousIconClick,
    handleForwardIconClick,
  } = useArrowHookInCard({ numberOfImages: imageNumber });
  // handle close emoji when click outside or press Escape
  useClickOutSideEmoji(wrapperRef, setShowEmojiPicker);
  useEscapeEmoji(setShowEmojiPicker);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <div className={styles.header__info}>
            <Avatar size={40} src={avatarImage} />
            <div className={styles.header__nickname}>{nickName}</div>
          </div>
          <div className={styles.header__more}>
            <MoreHorizIcon />
          </div>
        </div>
        <div className={styles.card__image}>
          <Image
            src={listImagesUrl ? listImagesUrl[currentImageIndex] : image}
            alt="post"
            fill
          />
          <ArrowCard
            showPreviousIcon={showPreviousIcon}
            handlePreviousIconClick={handlePreviousIconClick}
            isChangePosition={true}
          />
          <ArrowCard
            showForwardIcon={showForwardIcon}
            handleForwardIconClick={handleForwardIconClick}
            isChangePosition={true}
          />
          <Dot quantity={imageNumber} currentImageIndex={currentImageIndex} />
        </div>
        <div className={styles.card__actions}>
          <div className={styles.card__actions__container}>
            <div className={styles.card__actions__left}>
              <Theme theme={themeForCard}>
                <div className={styles.actions__like}>
                  {isLiked ? (
                    <FavoriteIcon color="primary" onClick={handleClickLike} />
                  ) : (
                    <FavoriteBorderIcon onClick={handleClickLike} />
                  )}
                </div>
                <ChatBubbleOutlineIcon />
                <SendOutlinedIcon />
              </Theme>
            </div>
            <div className={styles.card__actions__right}>
              {isBookmarked ? (
                <BookmarkIcon onClick={handleClickBookmark} />
              ) : (
                <BookmarkBorderIcon onClick={handleClickBookmark} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.card__information}>
          <div className={styles.card__like}>
            <div className={styles.like__container}>
              <Avatar size={25} src={avatarImage} />
              <div className={styles.like__list}>
                Liked by <b>{firstLikePerson}</b> and <b>others</b>
              </div>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.content__container}>
              <div>
                <b>{nickName}</b> {firstComment}
              </div>
            </div>
          </div>
          <div className={styles.card__comment}>
            View all {totalComments} comments
          </div>
          <div className={styles.card__time}>{postTime} DAYS AGO</div>
        </div>
        <div className={styles.add__comment}>
          <div className={styles.comment__container}>
            <div className={styles.emoji__container}>
              {showEmojiPicker ? (
                <div ref={wrapperRef}>
                  <EmojiPicker
                    onEmojiClick={handleOnEmojiClick}
                    searchDisabled={true}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <SentimentSatisfiedAltIcon onClick={handleClickEmoji} />
            <Input
              placeholder="Add a comment..."
              bordered={false}
              value={inputMessage}
              onChange={handleChangeInputMessage}
              onFocus={() => setShowEmojiPicker(false)}
            />
            <p
              className={canPost ? styles.post__active : styles.post__unactive}
            >
              Post
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

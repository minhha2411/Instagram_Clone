import { Avatar, Input } from "antd";
import {
  BookmarkBorderIcon,
  ChatBubbleOutlineIcon,
  FavoriteBorderIcon,
  MoreHorizIcon,
  SendOutlinedIcon,
  SentimentSatisfiedAltIcon,
} from "icons";
import Image from "next/image";
import React from "react";
import styles from "styles/Card.module.scss";
import image from "images/1099264.jpg";
import Dot from "components/Dot";
import useArrowHookInCard from "hooks/useArrowHookInCard";
import ArrowCard from "components/ArrowCard";

interface CardProps {
  imageNumber: number;
  listImagesUrl: string[];
  avatarImage: string;
  nickName: string;
}

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
  avatarImage = "",
  nickName = "",
}: CardProps): React.ReactElement {
  const {
    currentImageIndex,
    showForwardIcon,
    showPreviousIcon,
    handlePreviousIconClick,
    handleForwardIconClick,
  } = useArrowHookInCard({ numberOfImages: imageNumber });
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <div className={styles.header__info}>
            <Avatar
              size={40}
              src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"
            />
            <div className={styles.header__nickname}>bok.doll2</div>
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
              <FavoriteBorderIcon />
              <ChatBubbleOutlineIcon />
              <SendOutlinedIcon />
            </div>
            <div className={styles.card__actions__right}>
              <BookmarkBorderIcon />
            </div>
          </div>
        </div>
        <div className={styles.card__information}>
          <div className={styles.card__like}>
            <div className={styles.like__container}>
              <Avatar
                size={25}
                src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"
              />
              <div className={styles.like__list}>
                Liked by <b>jonas_tsai_tw</b> and <b>others</b>
              </div>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.content__container}>
              <div>
                <b>bok.doll2</b> 모든날 다 좋은날🐶💕
              </div>
            </div>
          </div>
          <div className={styles.card__comment}>View all 23 comments</div>
          <div className={styles.card__time}>2 DAYS AGO</div>
        </div>
        <div className={styles.add__comment}>
          <div className={styles.comment__container}>
            <SentimentSatisfiedAltIcon />
            <Input placeholder="Add a comment..." bordered={false}/>
            <p>Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

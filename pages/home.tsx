import { BASE_TEXT } from "constants/index";
import {
  HomeIcon,
  SearchIcon,
  ExploreIcon,
  OndemandVideoIcon,
  SendIcon,
  FavoriteBorderIcon,
  AddCircleOutlineIcon,
  PersonIcon,
  DensityMediumIcon,
} from "icons";
import { Avatar } from "antd";
import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";
import Story from "components/Story";
import Card from "components/Card";

function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__container}>
          <div className={styles.sidebar__content}>
            <div className={styles.sidebar__text}>
              <h2>Instagram</h2>
            </div>
            <div className={styles.sidebar__navigation}>
              <Navigation
                icon={<HomeIcon fontSize="large" />}
                text={BASE_TEXT.HOME}
              />
              <Navigation
                icon={<SearchIcon fontSize="large" />}
                text={BASE_TEXT.SEARCH}
              />
              <Navigation
                icon={<ExploreIcon fontSize="large" />}
                text={BASE_TEXT.EXPLORE}
              />
              <Navigation
                icon={<OndemandVideoIcon fontSize="large" />}
                text={BASE_TEXT.REELS}
              />
              <Navigation
                icon={<SendIcon fontSize="large" />}
                text={BASE_TEXT.MESSAGES}
              />
              <Navigation
                icon={<FavoriteBorderIcon fontSize="large" />}
                text={BASE_TEXT.NOTIFICATIONS}
              />
              <Navigation
                icon={<AddCircleOutlineIcon fontSize="large" />}
                text={BASE_TEXT.CREATE}
              />
              <Navigation
                icon={<Avatar icon={<PersonIcon />} />}
                text={BASE_TEXT.PROFILE}
              />
            </div>
            <div className={styles.sidebar__settings}>
              <Navigation
                icon={<DensityMediumIcon fontSize="medium" />}
                text={BASE_TEXT.MORE}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Story />
        <Card
          imageNumber={6}
          listImagesUrl={[
            "https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg",
            "https://st4.depositphotos.com/21607914/24096/i/450/depositphotos_240965200-stock-photo-south-korean-singer-actress-lee.jpg",
            "https://media.gettyimages.com/id/1271063584/photo/iu-attends-ambassador-appointment-ceremony-of-the-nation-tax-administration-of-korea-at.jpg?s=612x612&w=gi&k=20&c=jZA_kDfVC3kFtBap7X-fwUAQe4UtNmCzQyNWy0oi5zc=",
            "https://media.gettyimages.com/id/1209823842/photo/iu-is-seen-upon-departing-at-incheon-international-airport-on-february-18-2020-in-incheon.jpg?s=612x612&w=gi&k=20&c=z-F0k86c2MIJ7gQ0WL7RbjwiT697mFYEDqMD4vp0Evg=",
            "https://bloganchoi.com/wp-content/uploads/2022/03/iu-xinh-dep.jpg",
            "https://info-imgs.vgcloud.vn/2022/08/16/02/than-tuong-cua-nhieu-than-tuong-kpop-iu-lai-co-moi-quan-he-nhu-nguoi-la-voi-em-trai-8.jpg",
          ]}
          avatarImage="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"
          nickName="bok.doll2"
          firstLikePerson="jonas_tsai_tw"
          firstComment="모든날 다 좋은날🐶💕"
          totalComments={23}
          postTime={2}
        />
      </div>
      <div className={styles.about}>about</div>
    </div>
  );
}

export default Home;

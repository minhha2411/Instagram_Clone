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
        <Card />
      </div>
      <div className={styles.about}>about</div>
    </div>
  );
}

export default Home;

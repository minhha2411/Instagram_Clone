import React, { useState } from "react";
import styles from "styles/Story.module.scss";
import { Avatar } from "antd";
import Arrow from "components/Arrow";
import useArrowHookInStory from "hooks/useArrowHookInStory";

function Story({}): React.ReactElement {
  const { isForwardIcon, handleArrowClickInStory } = useArrowHookInStory();
  return (
    <div className={styles.container}>
      <div className={`${styles.story} ${isForwardIcon ? "" : styles.mgLeft}`}>
        <div className={`${styles.border}`}>
          <Avatar
            size={64}
            src="https://hips.hearstapps.com/hmg-prod/images/funny-dog-captions-1563456605.jpg?crop=0.748xw:1.00xh;0.0897xw,0&resize=480:*"
          />
        </div>
        <div className={styles.border}>
          <Avatar
            size={64}
            src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg"
          />
        </div>
        <div className={styles.border}>
          <Avatar
            size={64}
            src="https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>

        <div className={styles.border}>
          <Avatar
            size={64}
            src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/PT_dog_pic_cover_0.png.jpg?itok=wnWCDUk2"
          />
        </div>

        <div className={styles.border}>
          <Avatar
            size={64}
            src="https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute.jpg"
          />
        </div>

        <div className={styles.border}>
          <Avatar
            size={64}
            src="https://www.thesprucepets.com/thmb/fo16o1w_-Mmd2gv08f5IPsE9XKs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cute-dog-breeds-we-can-t-get-enough-of-4589340-18-d7d08269a41249d180fd1e0a249c6fcb.jpg"
          />
        </div>
        <Arrow
          isForwardIcon={isForwardIcon}
          handleArrowClick={handleArrowClickInStory}
        />
      </div>
    </div>
  );
}

export default Story;

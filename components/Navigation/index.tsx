import React from "react";
import NavigationProps from "../../interface/Navigation";
import styles from "../../styles/Navigation.module.scss";

function Navigation({ icon, text }: NavigationProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.container__icon}>{icon}</div>
      <div className={styles.spacing}></div>
      <div className={styles.container__text}>{text}</div>
    </div>
  );
}

export default Navigation;

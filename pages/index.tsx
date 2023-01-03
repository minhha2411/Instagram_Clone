import Login from "../components/Login";
import styles from "../styles/Login.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
}

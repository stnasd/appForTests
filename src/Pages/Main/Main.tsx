import { BodyTest } from "../../Components/BodyTest/BodyTest";
import styles from "./styles.module.css";
export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <BodyTest />
        </div>
      </main>
    </div>
  );
};

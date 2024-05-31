import { startProps } from "../../Types/types";
import styles from "./styles.module.css";
export const Start = ({ totalTime, onClickStart }: startProps) => {
  return (
    <div className={styles.start__block}>
      <h1
        className={styles.start__description}
      >{`Начать Тестирование, на прохождение у вас будет ${totalTime} минут.`}</h1>
      <button className={styles.start__button} onClick={() => onClickStart()}>
        Старт
      </button>
    </div>
  );
};

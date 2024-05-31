import styles from "./styles.module.css";
export const Finish = () => {
  return (
    <div className={styles.finish__block}>
      <h1 className={styles.finish__description}>
        {
          "Поздравляем, вы успешно завершили тестирование! Спасибо за участие и ваше усердие. Вскоре мы свяжемся с вами с результатами."
        }
      </h1>
    </div>
  );
};

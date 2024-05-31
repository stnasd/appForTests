import { Formik, Form, Field } from "formik";
import styles from "./styles.module.css";
import { quetionsProps } from "../../Types/types";

export const Question = ({
  question,
  options,
  type,
  onClickAnswer,
  numberAns,
}: quetionsProps) => {
  const renderItem = (type: string) => {
    if (type === "single") {
      return options.map((item, index) => {
        return (
          <div
            className={styles.question__block_item_single}
            key={type + index}
          >
            <label>
              <Field type="radio" name="selectedOption" value={item} />
              <span className={styles.inputSpan}></span>
              <span>{item}</span>
            </label>
          </div>
        );
      });
    }
    if (type === "multiple") {
      return options.map((item, index) => {
        return (
          <div
            className={styles.question__block_item_single}
            key={type + index}
          >
            <label>
              <Field type="checkbox" name="selectedOption" value={item} />
              <span className={styles.inputSpan}></span>
              <span>{item}</span>
            </label>
          </div>
        );
      });
    }
    if (type === "long") {
      return (
        <div className={styles.question__block_item_long} key={type + type}>
          <label>
            <Field
              as="textarea"
              name="selectedOption"
              className={styles.textarea}
            />
          </label>
        </div>
      );
    }
    if (type === "short") {
      return (
        <div className={styles.question__block_item_short} key={type + type}>
          <label>
            <Field
              as="textarea"
              name="selectedOption"
              className={styles.shorttext}
            />
          </label>
        </div>
      );
    }
  };
  return (
    <Formik
      initialValues={{ selectedOption: "" }}
      onSubmit={(values, { resetForm }) => {
        onClickAnswer({ [numberAns]: values.selectedOption });
        resetForm();
      }}
    >
      <Form>
        <div className={styles.question}>
          <div className={styles.question__description}>{question}</div>
          <div className={styles.question__block}>
            {renderItem(type)}
            <button type="submit" className={styles.question__button_submit}>
              <span>Ответить</span>
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

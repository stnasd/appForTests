import { useEffect, useState } from "react";
import { Question } from "../Question/Question";
import styles from "./styles.module.css";
import { questions, testTime } from "../../Constants/Constants";
import { useDispatch } from "react-redux";
import {
  addStep,
  addTimer,
  addUserAnswere,
  addNumberQuetion,
  addFinishStep,
} from "../../Store/Slice/ProgressTest.slice";
import { Start } from "../Start/Start";
import { Finish } from "../Finish/Finish";

const parseStorage = () => {
  const rootValue = JSON.parse(localStorage.getItem("persist:root") || "");
  const answerValue = JSON.parse(rootValue.answera || "");
  return answerValue;
};

export const BodyTest = () => {
  const [finishTime, setFinishTime] = useState(parseStorage().timer);
  const [[diffM, diffS], setDiff] = useState([0, 0]);
  const [tick, setTick] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [timerId, setTimerID] = useState<NodeJS.Timer | number>(0);
  const [step1, setStep1] = useState(true);
  const [questionNumber, setQuestionNumber] = useState<number>(
    parseStorage().numberQuetion
  );
  const [finishStep, setFinishStep] = useState<boolean>(
    parseStorage().numberQuetion
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const diff = (finishTime - new Date().getTime()) / 1000;
    if (diff > 0 && diff < 1) {
      setIsTimeout(() => true);
      setFinishStep(() => true);
      if (questions.length > questionNumber + 1) {
        for (let i = 0; i < questions.length; i++) {
          if (questionNumber < i) {
            onClickAnswer({ [i]: " " });
          }
        }
      }
    }
    setDiff([Math.floor((diff / 60) % 60), Math.floor(diff % 60)]);
  }, [tick, finishTime, step1, diffM]);

  useEffect(() => {
    if (isTimeout) clearInterval(timerId);
  }, [isTimeout, timerId]);

  useEffect(() => {
    setStep1(() => parseStorage().step);
  }, []);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTick((prev) => !prev);
    }, 1000);
    setTimerID(() => timerID);
    return () => clearInterval(timerID);
  }, [tick, finishTime, step1]);

  const onClickStart = () => {
    dispatch(addStep(!step1));
    dispatch(addTimer(new Date().getTime() + testTime.totalTime * 60 * 1000));

    setQuestionNumber(() => 0);
    setFinishTime(() => new Date().getTime() + testTime.totalTime * 60 * 1000);
    setStep1(() => !step1);
    setTick(() => !tick);
    setFinishStep(() => false);
  };

  const renderTime = `${diffM.toString().padStart(2, "0")}:${diffS
    .toString()
    .padStart(2, "0")}`;

  const renderRactangles = () => {
    return questions.map((item, index) => {
      return index === questionNumber ? (
        <div className={styles.test__order_figure_active} key={index}></div>
      ) : (
        <div className={styles.test__order_figure} key={index}></div>
      );
    });
  };

  const onClickAnswer = (ans: Object) => {
    setQuestionNumber((prev) => prev + 1);
    dispatch(addNumberQuetion(questionNumber + 1));
    dispatch(addUserAnswere(ans));
    if (questionNumber + 1 === questions.length) {
      setFinishStep(() => true);
      dispatch(addFinishStep(true));
    }
  };

  return (
    <div className={styles.test}>
      {step1 && !finishStep && (
        <Start totalTime={testTime.totalTime} onClickStart={onClickStart} />
      )}
      {!step1 && !finishStep && (
        <>
          <div className={styles.test__header}>
            <h1 className={styles.test__name}>Тестирование</h1>
            <div className={styles.test__time}>{renderTime}</div>
          </div>
          <div className={styles.test__main}>
            <div className={styles.test__order}>{renderRactangles()}</div>
            <Question
              numberAns={questionNumber}
              onClickAnswer={onClickAnswer}
              question={questions[questionNumber].question}
              options={questions[questionNumber].options}
              type={questions[questionNumber].type}
            />
          </div>
        </>
      )}
      {finishStep ? <Finish /> : null}
    </div>
  );
};

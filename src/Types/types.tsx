export type mockQuestions = {
  type: string;
  options: string[] | [];
  question: string;
  answer: string[];
};
export type mockTestTime = {
  totalTime: number;
};
type usersAnswera = {
  numberAnswere: string;
};
export type initStateUserAnswera = {
  userAnswera: usersAnswera[];
  timer: number;
  step: boolean;
  finishStep: boolean;
  numberQuetion: number;
};
export type startProps = {
  totalTime: number;
  onClickStart: Function;
};
export type quetionsProps = {
  question: string;
  options: string[];
  type: string;
  onClickAnswer: Function;
  numberAns: number;
};

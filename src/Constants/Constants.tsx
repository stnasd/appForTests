import { mockQuestions, mockTestTime } from "../Types/types";

export const questions: mockQuestions[] = [
  {
    question: "Что такое HTML?",
    options: [
      "Hyper Text Markup Language",
      "Hypertext Transfer Protocol",
      "High Technology Markup Language",
    ],
    type: "single",
    answer: ["Hyper Text Markup Language"],
  },
  {
    question: "Какие теги используются для создания списков в HTML?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    type: "multiple",
    answer: ["<ul>", "<ol>", "<li>"],
  },
  {
    question:
      "Чем отличаются position: relative, position: absolute и position: fixed в CSS?",
    options: [],
    type: "long",
    answer: [
      "Эти свойства используются для позиционирования элементов на странице. При position: relative элемент сдвигается относительно своего первоначального местоположения, при position: absolute элемент позиционируется относительно ближайшего позиционированного родителя, а при position: fixed элемент всегда остается на одном и том же месте на странице, даже при прокрутке.",
    ],
  },
  {
    question: "Какие методы жизненного цикла есть у React компонентов?",
    options: [],
    type: "long",
    answer: [
      "У React компонентов есть три метода жизненного цикла: mounting (когда компонент добавляется на страницу), updating (когда компонент обновляется при изменении данных) и unmounting (когда компонент удаляется со страницы).",
    ],
  },
  {
    question: "Вопрос 5",
    options: [],
    type: "short",
    answer: ["ответ 5"],
  },
  {
    question: "Вопрос 6",
    options: ["1", "2", "3", "4"],
    type: "single",
    answer: ["ответ 6"],
  },
  {
    question: "Вопрос 7",
    options: ["1", "2", "3", "4"],
    type: "single",
    answer: ["ответ 7"],
  },
  {
    question: "Вопрос 8",
    options: ["1", "2", "3", "4"],
    type: "single",
    answer: ["ответ 8"],
  },
  {
    question: "Вопрос 9",
    options: ["1", "2", "3", "4"],
    type: "single",
    answer: ["ответ 9"],
  },
  {
    question: "Вопрос 10",
    options: ["1", "2", "3", "4"],
    type: "single",
    answer: ["ответ 10"],
  },
];

export const testTime: mockTestTime = { totalTime: 20 };

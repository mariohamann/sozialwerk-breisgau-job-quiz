import { computed } from 'vue';
import QuestionsData from './content/questions.json';
import { infos } from './infos';

interface Question {
  type: 'question';
  index: number;
  title: string;
  answers: Array<{
    text: string;
    image: string;
    alt: string;
    areas: string[];
    index: number;
  }>;
}

interface Info {
  type: 'info';
  index: number;
  path: string;
  title: string;
  img: string;
  alt: string;
  question: number;
  content: string;
}

export type QuizItem = Question | Info;

export const quizItems = computed<QuizItem[]>(() => {
  const items: QuizItem[] = [];
  let itemIndex = 0;

  QuestionsData.forEach((question, questionIndex) => {
    items.push({
      type: 'question',
      index: itemIndex++,
      title: question.title,
      answers: question.answers.map((answer, answerIndex) => ({
        ...answer,
        index: answerIndex + 1
      }))
    });

    const info = infos.value.find((info) => info.question === questionIndex + 1);
    if (info) {
      items.push({
        type: 'info',
        index: itemIndex++,
        ...info
      });
    }
  });

  return items;
});

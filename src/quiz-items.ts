import { computed } from 'vue';
import QuestionsData from './questions.json';
import { infos } from './infos';

interface Question {
  type: 'question';
  title: string;
  answers: Array<{
    text: string;
    image: string;
    alt: string;
    areas: string[];
  }>;
}

interface Info {
  type: 'info';
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

  QuestionsData.forEach((question, index) => {
    items.push({
      type: 'question',
      ...question
    });

    const info = infos.value.find((info) => info.question === index + 1);
    if (info) {
      items.push({
        type: 'info',
        ...info
      });
    }
  });

  return items;
});

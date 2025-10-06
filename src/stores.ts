import { reactive } from 'vue';
import AreasData from './areas.json';

const initialStore = AreasData.reduce((acc, area) => {
  acc[area.id] = 0;
  return acc;
}, {});

export const scores = reactive(initialStore);

export const position = reactive({ value: 0 });

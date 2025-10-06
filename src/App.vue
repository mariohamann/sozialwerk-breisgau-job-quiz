<script setup lang="ts">
import Intro from "./components/Intro.vue";
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";
import QuestionsData from "./questions.json";
import AreasData from "./areas.json";

import { scores } from "./store";
import { infos } from "./infos";

console.log(infos);
</script>

<template>
	<div>
		<div v-for="area in AreasData" :key="area.id">
			<p>
				{{ area.id }}<span>{{ scores[area.id] }}</span>
			</p>
		</div>
	</div>
	<div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>

	<Intro />
	<Question
		v-for="(question, index) in QuestionsData"
		:key="index"
		:question="question.title"
		:answers="question.answers"
		:info="infos.find((info) => info.question === index + 1)"
	/>
	<Result />
</template>

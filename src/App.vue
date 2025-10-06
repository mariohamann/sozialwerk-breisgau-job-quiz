<script setup lang="ts">
import Intro from "./components/Intro.vue";
import Question from "./components/Question.vue";

import QuestionsData from "./questions.json";
</script>

<template>
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
	/>
</template>

<script setup lang="ts">
import Intro from "./components/Intro.vue";
import Question from "./components/Question.vue";
import Info from "./components/Info.vue";
import Result from "./components/Result.vue";
import AreasData from "./areas.json";

import { scores, position } from "./stores";
import { quizItems } from "./quiz-items";
</script>

<template>
	<div>{{ position }}</div>

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

	<Intro v-if="0 === position.value" />
	<template v-for="(item, index) in quizItems" :key="index">
		<div v-if="index + 1 === position.value">
			<Question
				v-if="item.type === 'question'"
				:question="item.title"
				:answers="item.answers"
			/>
			<Info v-else-if="item.type === 'info'" :content="item" />
		</div>
	</template>
	<Result v-if="position.value === quizItems.length + 1" />
</template>

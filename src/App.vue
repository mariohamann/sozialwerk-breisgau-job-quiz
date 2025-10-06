<script setup lang="ts">
import Intro from "./components/Intro.vue";
import Question from "./components/Question.vue";
import Info from "./components/Info.vue";
import Result from "./components/Result.vue";

import { position } from "./stores";
import { quizItems } from "./quiz-items";
</script>

<template>
	<div class="min-h-screen flex flex-col items-center justify-center">
		<Intro v-if="0 === position.value" />
		<template v-for="(item, index) in quizItems" :key="index">
			<div v-if="index + 1 === position.value">
				<Question
					v-if="item.type === 'question'"
					:question="item.title"
					:questionIndex="item.index"
					:answers="item.answers"
				/>
				<Info v-else-if="item.type === 'info'" :content="item" />
			</div>
		</template>
		<Result v-if="position.value === quizItems.length + 1" />
	</div>
</template>

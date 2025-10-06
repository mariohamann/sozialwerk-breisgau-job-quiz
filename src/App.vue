<script setup lang="ts">
import { watch, computed } from "vue";
import Intro from "./components/Intro.vue";
import Question from "./components/Question.vue";
import Info from "./components/Info.vue";
import Result from "./components/Result.vue";

import { position } from "./stores";
import { quizItems } from "./quiz-items";

const currentItem = computed(() => {
	if (position.value === 0) return { type: "intro" };
	if (position.value === quizItems.value.length + 1)
		return { type: "result" };
	return quizItems.value[position.value - 1];
});

const onAfterLeave = () => {
	window.scrollTo({ top: 0 });
};
</script>

<template>
	<div class="min-h-screen flex flex-col items-center justify-center">
		<Transition name="slide-fade" mode="out-in" @after-leave="onAfterLeave">
			<Intro v-if="currentItem.type === 'intro'" key="intro" />
			<Result v-else-if="currentItem.type === 'result'" key="result" />
			<Question
				v-else-if="currentItem.type === 'question'"
				:key="`question-${currentItem.index}`"
				:question="currentItem.title"
				:questionIndex="currentItem.index"
				:answers="currentItem.answers"
			/>
			<Info
				v-else-if="currentItem.type === 'info'"
				:key="`info-${currentItem.index}`"
				:content="currentItem"
			/>
		</Transition>
	</div>
</template>

<style>
.slide-fade-enter-active {
	transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
	transform: translateY(20px);
	opacity: 0;
}

.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>

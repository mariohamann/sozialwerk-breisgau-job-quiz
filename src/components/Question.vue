<script setup lang="ts">
import Answer from "./Answer.vue";

const props = defineProps<{
	question: string;
	answers: {
		text: string;
		image: string;
		alt: string;
		areas: string[];
		index: number;
	}[];
	questionIndex: number;
}>();
</script>

<template>
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2
					class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
				>
					{{ question }}
				</h2>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<Answer
					v-for="(answer, index) in answers"
					:key="index"
					:answer="answer"
					:questionIndex="questionIndex"
				/>
			</div>
		</div>
	</div>
</template>

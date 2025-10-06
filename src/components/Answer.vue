<script setup lang="ts">
import { scores, position } from "../stores";

const props = defineProps<{
	answer: {
		text: string;
		image: string;
		alt: string;
		areas: string[];
		index: number;
	};
	questionIndex: number;
}>();

const handleClick = () => {
	props.answer.areas.forEach((area) => {
		scores[area]++;
	});

	position.value++;
};

const imageSrc = new URL(
	`../assets/question_${props.questionIndex + 1}/${props.answer.index}.jpg`,
	import.meta.url
).href;
</script>

<template>
	<article
		class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 cursor-pointer transition-transform hover:scale-105"
		@click="handleClick"
	>
		<img
			:src="imageSrc"
			:alt="answer.alt"
			class="absolute inset-0 -z-10 size-full object-cover"
		/>
		<div
			class="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40"
		/>
		<div
			class="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10"
		/>

		<h3 class="mt-3 text-lg/6 font-semibold text-white">
			<span class="absolute inset-0" />
			{{ answer.text }}
		</h3>
	</article>
</template>

<script setup lang="ts">
import { scores } from "../store";

const props = defineProps<{
	answer: {
		text: string;
		image: string;
		alt: string;
		areas: string[];
	};
}>();

const handleClick = () => {
	props.answer.areas.forEach((area) => {
		scores[area]++;
	});
};
</script>

<template>
	<button @click="handleClick">
		<img :src="props.answer.image" :alt="props.answer.alt" />
		<p>{{ props.answer.text }}</p>
	</button>
</template>

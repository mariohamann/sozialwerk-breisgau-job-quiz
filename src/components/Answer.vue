<script setup lang="ts">
const props = defineProps<{
	answer: {
		text: string;
		image: string;
		alt: string;
		areas: string[];
	};
}>();

const handleClick = () => {
	alert(JSON.stringify(props.answer.areas));
};
</script>

<template>
	<button @click="handleClick">
		<img :src="props.answer.image" :alt="props.answer.alt" />
		<p>{{ props.answer.text }}</p>
	</button>
</template>

<script setup lang="ts">
import Answer from "./Answer.vue";
defineProps<{
	question: string;
	answers: { text: string; image: string; alt: string; areas: string[] }[];
}>();
</script>

<template>
	<h2>{{ question }}</h2>
	<Answer v-for="(answer, index) in answers" :key="index" :answer="answer" />
</template>

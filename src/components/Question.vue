<script setup lang="ts">
import Answer from "./Answer.vue";
import Info from "./Info.vue";

import type { ParsedInfo } from "../infos";
const props = defineProps<{
	question: string;
	answers: { text: string; image: string; alt: string; areas: string[] }[];
	info?: ParsedInfo;
}>();
console.log(props.info);
</script>

<template>
	<h2>{{ question }}</h2>
	<Answer v-for="(answer, index) in answers" :key="index" :answer="answer" />
	<Info v-if="info" :content="info"></Info>
</template>

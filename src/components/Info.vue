<script setup lang="ts">
import type { ParsedInfo } from "../infos";

import { position } from "../stores";

interface Props {
	content: ParsedInfo;
}

const props = defineProps<Props>();

const handleClick = () => {
	position.value++;
};

console.log(props.content);
</script>

<template>
	<div class="info-card">
		<h2>{{ content.title }}</h2>
		<img
			:src="props.content.path.split('/').pop()!.replace('.md', '.jpg')"
			:alt="props.content.alt || props.content.title"
		/>
		<div v-html="content.content"></div>
		<button @click="handleClick">Next</button>
	</div>
</template>

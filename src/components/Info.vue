<script setup lang="ts">
import type { ParsedInfo } from "../infos";

import { position } from "../stores";

interface Props {
	content: ParsedInfo;
}

defineProps<Props>();

const handleClick = () => {
	position.value++;
};
</script>

<template>
	<div class="info-card">
		<h2>{{ content.title }}</h2>
		<img
			v-if="content.img"
			:src="content.img"
			:alt="content.alt || content.title"
		/>
		<div v-html="content.content"></div>
		<button @click="handleClick">Next</button>
	</div>
</template>

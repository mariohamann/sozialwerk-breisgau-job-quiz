<script setup lang="ts">
import type { ParsedInfo } from "../infos";

interface Props {
	content: ParsedInfo;
}

defineProps<Props>();
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
	</div>
</template>

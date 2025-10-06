<script setup lang="ts">
import { computed } from "vue";
import { scores } from "../store";
import AreasData from "../areas.json";

const topArea = computed(() => {
	const [id, score] = Object.entries(scores).sort(([, a], [, b]) => b - a)[0];
	return {
		id,
		score,
		...AreasData.find((a) => a.id === id),
	};
});
</script>

<template>
	<div>
		<h2>Ergebnis</h2>
		<div class="mb-4">
			<h3 class="text-lg font-semibold">Dein Match beim Sozialwerk</h3>
			<p>{{ topArea.title }}</p>
			<a
				href="https://www.sozialwerk-breisgau.de/stellenangebote/am-bruckwald"
				>Jetzt informieren</a
			>
		</div>
	</div>
</template>

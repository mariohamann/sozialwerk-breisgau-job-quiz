<script setup lang="ts">
import { computed } from "vue";
import { store } from "../store";
import AreasData from "../areas.json";

const topArea = computed(() => {
	const [id, score] = Object.entries(store).sort(([, a], [, b]) => b - a)[0];
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
			<h3 class="text-lg font-semibold">
				{{ topArea.id }}: {{ topArea.score }} Punkte
			</h3>
			<p>{{ topArea.title }}</p>
		</div>
	</div>
</template>

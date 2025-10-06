<script setup lang="ts">
import { computed } from "vue";
import { scores } from "../stores";
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
	<div class="relative py-16 px-4">
		<div
			class="absolute inset-x-0 top-0 hidden h-1/2 bg-white lg:block"
			aria-hidden="true"
		/>
		<div
			class="mx-auto max-w-7xl bg-bruckwald lg:bg-transparent lg:px-8 overflow-hidden"
		>
			<div class="lg:grid lg:grid-cols-12">
				<div
					class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16"
				>
					<div
						class="absolute inset-x-0 h-1/2 lg:hidden bg-white"
						aria-hidden="true"
					/>
					<div
						class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:p-0"
					>
						<iframe
							class="relative aspect-video w-full rounded-2xl shadow-2xl"
							:src="`https://www.youtube-nocookie.com/embed/${topArea.youtube_id}`"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>

				<div
					class="relative bg-bruckwald lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-2xl"
				>
					<div
						class="absolute inset-0 hidden overflow-hidden rounded-2xl lg:block"
						aria-hidden="true"
					></div>
					<div
						class="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-2xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0"
					>
						<h2 class="text-2xl tracking-tight text-white">
							Dein Match beim Sozialwerk:<br />

							<div class="font-bold mt-2">
								{{ topArea.title }}
							</div>
						</h2>
						<p class="text-lg text-white">
							{{ topArea.text }}
						</p>
						<a
							class="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-bruckwald shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
							href="https://www.sozialwerk-breisgau.de/stellenangebote/am-bruckwald"
							target="_blank"
						>
							Jetzt informieren
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

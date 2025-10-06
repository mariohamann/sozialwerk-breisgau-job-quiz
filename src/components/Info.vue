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

const imageSrc = new URL(
	`../assets/infos/${props.content.path
		.split("/")
		.pop()!
		.replace(".md", "")}.jpg`,
	import.meta.url
).href;
</script>

<template>
	<div class="relative py-16 px-4">
		<div
			class="absolute inset-x-0 top-0 hidden h-1/2 lg:block"
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
						class="absolute inset-x-0 h-1/2 lg:hidden"
						aria-hidden="true"
					/>
					<div
						class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:p-0"
					>
						<img
							class="relative aspect-10/6 w-full rounded-2xl object-cover shadow-2xl sm:aspect-2/1 lg:aspect-square"
							:src="imageSrc"
							:alt="content.alt || content.title"
						/>
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
						class="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-2xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0 lg:py-20"
					>
						<h2
							class="text-4xl font-bold tracking-tight text-white"
						>
							{{ content.title }}
						</h2>
						<div
							class="prose prose-invert prose-lg"
							v-html="content.content"
						></div>
						<button
							class="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-bruckwald shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
							@click="handleClick"
						>
							Weiter
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

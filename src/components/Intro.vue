<script setup lang="ts">
import { position } from "../stores";
const handleClick = () => {
	position.value++;
};
</script>

<template>
	<div>
		<h1>Willkommen zum Job-Quiz!</h1>
		<p>
			Finde spielerisch heraus, welche Berufe zu dir passen könnten.
			Beantworte die Fragen und entdecke spannende Karrieremöglichkeiten.
		</p>
		<p>
			Klicke auf "Start", um das Quiz zu beginnen und mehr über deine
			beruflichen Interessen zu erfahren!
		</p>
		<button @click="handleClick">Start</button>
	</div>
</template>

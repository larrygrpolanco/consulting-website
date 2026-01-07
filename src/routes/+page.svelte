<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Home | 차원 Chaone Labs</title>
</svelte:head>

<main>
	<Hero show={true} />
</main>

<style>
	main {
		width: 100vw;
		min-height: 100vh;
		overflow-x: hidden;
	}
</style>

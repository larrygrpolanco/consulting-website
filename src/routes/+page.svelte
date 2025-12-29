<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Consulting Website | Strategic Digital Partner</title>
</svelte:head>

<main>
	<Nav />
	<Hero show={true} />
</main>

<style>
	main {
		width: 100vw;
		min-height: 100vh;
		overflow-x: hidden;
	}
</style>

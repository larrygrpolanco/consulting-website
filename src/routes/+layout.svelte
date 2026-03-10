<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import ContactModal from '$lib/components/ContactModal.svelte';
	let { children } = $props();
</script>

<Nav />
{@render children()}
<ContactModal />

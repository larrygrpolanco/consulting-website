<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let navRef: HTMLElement;

	onMount(() => {
		gsap.fromTo(navRef, 
			{ y: -20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
		);
	});
</script>

<nav bind:this={navRef} class="nav">
	<div class="nav-inner">
		<div class="nav-logo">
			<a href="/">
				<span class="logo-text">차원 Chaone Labs</span>
			</a>
		</div>
		
		<div class="nav-links text-sans">
			<a href="/work" class="nav-link">work</a>
			<a href="/services" class="nav-link">services</a>
			<a href="/blog" class="nav-link">blog</a>
			<a href="/about" class="nav-link">about</a>
			<a href="mailto:larry@kyeollab.io" class="nav-link contact-link">contact</a>
		</div>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 40px 5vw;
		z-index: 1000;
		pointer-events: none;
		opacity: 0;
	}

	.nav-inner {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		pointer-events: auto;
	}

	.logo-text {
		font-family: var(--font-serif);
		font-weight: 900;
		font-size: 24px;
		letter-spacing: -0.02em;
		color: var(--foreground);
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		gap: 24px;
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-weight: 500;
		align-items: center;
	}

	.nav-link {
		color: var(--foreground-200);
		text-decoration: none;
		transition: color 0.3s, transform 0.3s;
		width: fit-content;
	}

	.nav-link:hover {
		color: var(--foreground);
	}

	.contact-link {
		color: var(--accent);
	}
</style>

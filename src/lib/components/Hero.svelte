<script lang="ts">
	import { tick } from 'svelte';
	import { gsap } from 'gsap';

	let { show = false } = $props();

	let heroRef: HTMLElement;

	$effect(() => {
		if (show) {
			animateIn();
		}
	});

	async function animateIn() {
		await tick();
		gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.fromTo('.headline',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8 }
			)
			.fromTo('.sub-headline',
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6 },
				'-=0.4'
			)
			.fromTo('.description > div',
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
				'-=0.3'
			)
			.fromTo('.cta-group .btn',
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
				'-=0.4'
			);
		}, heroRef);
	}
</script>

<section bind:this={heroRef} class="hero" class:visible={show}>
	<div class="header">
		<h1 class="headline">Chaone Labs</h1>
		<h2 class="sub-headline">Open Research Technologies for Education & Linguistics</h2>
	</div>

	<div class="description">
		<div>
			<h3>"Finding the texture in the text."</h3>
		</div>
		<div>
			<p>
				We build the "Missing Middle"—tools that follow the natural flow
				of research and pedagogy. Transform your data into reproducible insights.
			</p>
		</div>
	</div>

	<div class="cta-group">
		<a href="/work" class="btn primary">View Our Work</a>
		<a href="/services" class="btn secondary">Book a Consultation</a>
	</div>
</section>

<style>
	.hero {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4em;
	}

	.hero .headline,
	.hero .sub-headline,
	.hero .description > div,
	.hero .cta-group .btn {
		opacity: 0;
	}

	.header {
		margin-bottom: 4em;
	}

	.headline {
		margin-bottom: 0.2em;
	}

	.sub-headline {
		font-family: var(--font-sans);
		text-transform: uppercase;
		font-weight: 600;
		font-size: clamp(14px, 1.5vw, 18px);
		letter-spacing: 0.1em;
		color: var(--accent);
		opacity: 0.8;
	}

	.description {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6em;
		max-width: 1300px;
		margin-bottom: 4em;
	}

	.description p {
		font-size: clamp(18px, 1.5vw, 24px);
		max-width: 600px;
	}

	.cta-group {
		display: flex;
		gap: 2em;
	}

	.btn {
		padding: 1.2em 2.5em;
		font-size: 14px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: all 0.3s ease;
		border: 1px solid var(--foreground);
	}

	.btn.primary {
		background-color: var(--foreground);
		color: var(--background);
	}

	.btn.primary:hover {
		background-color: transparent;
		color: var(--foreground);
	}

	.btn.secondary {
		background-color: transparent;
		color: var(--foreground);
	}

	.btn.secondary:hover {
		background-color: var(--foreground);
		color: var(--background);
	}

	@media (max-width: 900px) {
		.hero {
			padding: 2em;
		}

		.description {
			grid-template-columns: 1fr;
			gap: 2em;
		}

		.cta-group {
			flex-direction: column;
			gap: 1em;
		}

		.btn {
			text-align: center;
		}
	}
</style>

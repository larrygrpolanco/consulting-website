<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Nav from '$lib/components/Nav.svelte';
	import { tick } from 'svelte';
	import { gsap } from 'gsap';

	let workRef: HTMLElement;

	$effect(() => {
		animateIn();
	});

	async function animateIn() {
		await tick();
		gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.fromTo('.work-header',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8 }
			)
			.fromTo('.project-item',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
				'-=0.4'
			);
		}, workRef);
	}
</script>

<svelte:head>
	<title>Work | 차원 Chaone Labs</title>
</svelte:head>

<Nav />

<main bind:this={workRef} class="work-container">
	<header class="work-header">
		<h1 class="headline">Projects</h1>
		<p class="sub-headline">
			Tools and websites we've built. Open-source projects, client work, and experiments.
		</p>
	</header>

	<div class="projects-list">
		{#each projects as project, i}
			<article class="project-item">
				<div class="project-meta">
					<span class="label">{String(i + 1).padStart(2, '0')} / {project.year}</span>
					<div class="project-tags">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
				
				<div class="project-main">
					<div class="project-media">
						{#if project.media[0].type === 'image'}
							<img src={project.media[0].url} alt={project.media[0].alt || project.title} />
						{:else}
							<video src={project.media[0].url} autoplay loop muted playsinline></video>
						{/if}
					</div>

					<div class="project-content">
						<h2 class="project-title">{project.title}</h2>
						<p class="project-description">{project.description}</p>
						<a href="/work/{project.slug}" class="view-project">View Case Study</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</main>

<style>
	.work-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 160px 5vw 100px;
		display: flex;
		flex-direction: column;
		gap: 80px;
	}

	.work-header {
		max-width: 800px;
		opacity: 0;
	}

	.headline {
		font-size: clamp(40px, 5vw, 64px);
		line-height: 1.1;
		margin-bottom: 24px;
		font-weight: 700;
	}

	.sub-headline {
		font-size: 18px;
		color: var(--foreground-200);
		line-height: 1.5;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 120px;
	}

	.project-item {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 40px;
		opacity: 0;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
		display: block;
		margin-bottom: 16px;
	}

	.project-tags {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.tag {
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--accent);
		font-weight: 600;
	}

	.project-main {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.project-media {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: rgba(var(--foreground-rgb), 0.05);
	}

	.project-media img, .project-media video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.project-item:hover .project-media img,
	.project-item:hover .project-media video {
		transform: scale(1.02);
	}

	.project-content {
		max-width: 800px;
	}

	.project-title {
		font-size: 32px;
		margin-bottom: 16px;
		font-weight: 600;
	}

	.project-description {
		font-size: 18px;
		color: var(--foreground-200);
		line-height: 1.6;
		margin-bottom: 24px;
	}

	.view-project {
		font-family: var(--font-mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--foreground);
		text-decoration: none;
		border-bottom: 1px solid var(--foreground);
		padding-bottom: 4px;
		transition: color 0.3s, border-color 0.3s;
	}

	.view-project:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	@media (max-width: 768px) {
		.project-item {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.project-meta {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.project-tags {
			flex-direction: row;
			gap: 12px;
		}

		.work-container {
			padding-top: 120px;
		}
	}
</style>

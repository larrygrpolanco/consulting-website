<script lang="ts">
	import { page } from '$app/state';
	import { projects } from '$lib/data/projects';
	import { tools } from '$lib/data/tools';
	import { tick } from 'svelte';
	import { gsap } from 'gsap';

	const slug = $derived(page.params.slug);
	const project = $derived(projects.find((p) => p.slug === slug));
	const tool = $derived(project ? undefined : tools.find((t) => t.slug === slug));
	const nextProject = $derived(
		projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length]
	);

	let heroRef: HTMLElement;

	$effect(() => {
		if (project || tool) {
			animateIn();
		}
	});

	async function animateIn() {
		await tick();
		if (!heroRef) return;

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
			.fromTo('.description',
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6 },
				'-=0.4'
			)
			.fromTo('.cta-group .btn-lab',
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
				'-=0.3'
			);
		}, heroRef);
	}
</script>

<svelte:head>
	{#if project}
		<title>{project.title} | Chaone Labs</title>
	{:else if tool}
		<title>{tool.title} | Chaone Labs</title>
	{:else}
		<title>Not Found | Chaone Labs</title>
	{/if}
</svelte:head>

{#if project}
	<main class="project-lab-detail" bind:this={heroRef}>
		<header class="project-lab-hero">
			<h1 class="headline">{project.title}</h1>
			<p class="project-lab-lead sub-headline">{project.description}</p>
		</header>

		<div class="project-lab-main">
			<div class="project-lab-content">
				<section class="project-lab-description description">
					<p>{project.longDescription}</p>
				</section>

				<section class="project-lab-gallery">
					{#each project.media as item}
						<div class="gallery-lab-item">
							<a href={project.website || '#'} target={project.website ? "_blank" : undefined} rel={project.website ? "noopener noreferrer" : undefined} class="media-link">
								{#if item.type === 'image'}
									<img src={item.url} alt={item.alt || project.title} loading="lazy" />
								{:else}
									<video src={item.url} autoplay loop muted playsinline></video>
								{/if}
							</a>
						</div>
					{/each}
				</section>
			</div>

			<aside class="project-lab-sidebar">
				<div class="sidebar-section">
					<span class="sidebar-label">Tags</span>
					<div class="sidebar-tags">
						{#each project.tags as tag}
							<span class="card-lab-tag" style="margin-right: 4px; margin-bottom: 4px; display: inline-block;">{tag}</span>
						{/each}
					</div>
				</div>
				<div class="sidebar-section">
					<span class="sidebar-label">Year</span>
					<span class="sidebar-value">{project.year}</span>
				</div>

				<div class="sidebar-footer cta-group" style="padding-top: 20px; border-top: 1px solid rgba(0,33,71,0.1); margin-top: 20px; display: flex; flex-direction: column; gap: 12px;">
					{#if project.website}
						<a href={project.website} target="_blank" rel="noopener noreferrer" class="btn-lab" style="width: 100%; justify-content: center;">VIEW PROJECT</a>
					{/if}
					{#if project.repository}
						<a href={project.repository} target="_blank" rel="noopener noreferrer" class="btn-lab" style="width: 100%; justify-content: center;">GITHUB REPO</a>
					{/if}
					<a href="/lab" class="btn-lab" style="width: 100%; justify-content: center;">BACK TO LAB</a>
				</div>
			</aside>
		</div>

		<footer class="project-lab-nav">
			<div class="nav-prev"></div>
			<div class="nav-next">
				<span class="sidebar-label">Next Project</span>
				<a href="/lab/{nextProject.slug}" class="next-project-title" style="display: block; margin-top: 8px;">
					{nextProject.title} →
				</a>
			</div>
		</footer>
	</main>

{:else if tool}
	<main class="project-lab-detail" bind:this={heroRef}>
		<header class="project-lab-hero">
			<h1 class="headline">{tool.title}</h1>
			<p class="project-lab-lead sub-headline">{tool.description}</p>
		</header>

		<div class="project-lab-main">
			<div class="project-lab-content">
				<section class="project-lab-description description">
					<p>{tool.longDescription}</p>
				</section>
			</div>

			<aside class="project-lab-sidebar">
				<div class="sidebar-section">
					<span class="sidebar-label">Category</span>
					<span class="sidebar-value">{tool.category}</span>
				</div>
				<div class="sidebar-section">
					<span class="sidebar-label">Tags</span>
					<div class="sidebar-tags">
						{#each tool.tags as tag}
							<span class="card-lab-tag" style="margin-right: 4px; margin-bottom: 4px; display: inline-block;">{tag}</span>
						{/each}
					</div>
				</div>
				<div class="sidebar-section">
					<span class="sidebar-label">Year</span>
					<span class="sidebar-value">{tool.year}</span>
				</div>
				<div class="sidebar-section">
					<span class="sidebar-label">License</span>
					<span class="sidebar-value">{tool.license}</span>
				</div>

				<div class="sidebar-footer cta-group" style="padding-top: 20px; border-top: 1px solid rgba(0,33,71,0.1); margin-top: 20px; display: flex; flex-direction: column; gap: 12px;">
					<a href={tool.repository} target="_blank" rel="noopener noreferrer" class="btn-lab" style="width: 100%; justify-content: center;">GITHUB REPO</a>
					{#if tool.liveUrl}
						<a href={tool.liveUrl} target="_blank" rel="noopener noreferrer" class="btn-lab" style="width: 100%; justify-content: center;">VIEW TOOL</a>
					{/if}
					<a href="/lab" class="btn-lab" style="width: 100%; justify-content: center;">BACK TO LAB</a>
				</div>
			</aside>
		</div>
	</main>

{:else}
	<main class="project-not-found">
		<h1>Not found</h1>
		<p><a href="/lab">Back to Lab</a></p>
	</main>
{/if}

<style>
	:global(body) {
		scroll-snap-type: none;
	}

	.headline, .sub-headline, .description, .cta-group .btn-lab {
		opacity: 0;
	}

	.gallery-lab-item {
		overflow: hidden;
		background: rgba(var(--foreground-rgb), 0.05);
		margin-bottom: 1rem;
	}

	.media-link {
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}

	.gallery-lab-item img,
	.gallery-lab-item video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
		display: block;
	}

	.gallery-lab-item:hover img,
	.gallery-lab-item:hover video {
		transform: scale(1.02);
	}

	.next-project-title {
		font-size: clamp(24px, 4vw, 48px);
		font-family: var(--font-serif);
		color: var(--foreground);
		text-decoration: none;
		transition: opacity 0.3s;
	}

	.next-project-title:hover {
		opacity: 0.7;
	}

	.project-not-found {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
</style>

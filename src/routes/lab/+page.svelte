<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { tools } from '$lib/data/tools';
	import { tick } from 'svelte';
	import { gsap } from 'gsap';

	let workRef: HTMLElement;
	let currentTab = $state('studio'); // 'studio' | 'tools'
	let ctx: gsap.Context;

	let isInitialLoad = true;

	$effect(() => {
		// Re-run animation when tab changes
		const _ = currentTab; // Dependency

		if (isInitialLoad) {
			animateInitial();
			isInitialLoad = false;
		} else {
			animateTabChange();
		}

		return () => {
			if (ctx) ctx.revert();
		};
	});

	async function switchTab(tab: string) {
		if (currentTab === tab) return;
		currentTab = tab;
	}

	async function animateInitial() {
		await tick();
		if (!workRef) return;

		if (ctx) ctx.revert();
		ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.from('.work-header', {
				y: 30,
				opacity: 0,
				duration: 0.8
			}).from(
				'.project-item',
				{
					y: 30,
					opacity: 0,
					duration: 0.6,
					stagger: 0.1,
					clearProps: 'all'
				},
				'-=0.4'
			);
		}, workRef);
	}

	async function animateTabChange() {
		await tick();
		if (!workRef) return;

		// We don't revert ctx here because we want to keep the header as is
		// but we might need to handle the new items
		gsap.from('.project-item', {
			y: 20,
			opacity: 0,
			duration: 0.5,
			stagger: 0.1,
			ease: 'power2.out',
			clearProps: 'all'
		});
	}
</script>

<svelte:head>
	<title>Lab | 차원 Chaone Labs</title>
</svelte:head>

<main bind:this={workRef} class="work-container">
	<header class="work-header">
		<h1 class="headline">Lab</h1>
		<div class="tab-selector">
			<button
				class="tab-btn {currentTab === 'studio' ? 'active' : ''}"
				onclick={() => switchTab('studio')}
				role="tab"
				aria-selected={currentTab === 'studio'}
			>
				Projects
			</button>
			<button
				class="tab-btn {currentTab === 'tools' ? 'active' : ''}"
				onclick={() => switchTab('tools')}
				role="tab"
				aria-selected={currentTab === 'tools'}
			>
				Open Source Tools
			</button>
		</div>
		<p class="sub-headline">
			Things we've built: research tools, learning platforms, and experiments. Everything marked open source is free to use and modify.
		</p>
	</header>

	{#key currentTab}
		<div class="projects-list">
			{#if currentTab === 'studio'}
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
							<a href={project.website || `/lab/${project.slug}`} target={project.website ? "_blank" : undefined} rel={project.website ? "noopener noreferrer" : undefined} class="project-media-link">
								<div class="project-media">
									{#if project.media[0].type === 'image'}
										<img src={project.media[0].url} alt={project.media[0].alt || project.title} />
									{:else}
										<video src={project.media[0].url} autoplay loop muted playsinline></video>
									{/if}
								</div>
							</a>

							<div class="project-content">
								<h2 class="project-title">{project.title}</h2>
								<p class="project-description">{project.description}</p>
								<div class="tool-actions">
									{#if project.website}
										<a href={project.website} target="_blank" rel="noopener noreferrer" class="view-project">View Project</a>
									{/if}
									{#if project.repository}
										<a href={project.repository} target="_blank" rel="noopener noreferrer" class="view-project">Github Repo</a>
									{/if}
									<a href="/lab/{project.slug}" class="view-project">Details</a>
								</div>
							</div>
						</div>
					</article>
				{/each}
			{:else}
				{#each tools as tool, i}
					<article class="project-item">
						<div class="project-meta">
							<span class="label">{String(i + 1).padStart(2, '0')} / {tool.year}</span>
							<div class="project-tags">
								{#each tool.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</div>

						<div class="tool-card">
							<h2 class="project-title">{tool.title}</h2>
							<p class="project-description">{tool.description}</p>
							<div class="tool-actions">
								{#if tool.repository}
									<a
										href={tool.repository}
										target="_blank"
										rel="noopener noreferrer"
										class="view-project">Github Repo</a
									>
								{/if}
								{#if tool.liveUrl}
									<a
										href={tool.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="view-project">View Tool</a
									>
								{/if}
								<a href="/lab/{tool.slug}" class="view-project">Details</a>
							</div>
						</div>
					</article>
				{/each}
			{/if}
		</div>
	{/key}
</main>

<style>
	.work-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 5vw 100px;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.work-header {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.headline {
		font-size: clamp(64px, 5vw, 64px);
		line-height: 1.1;
		font-weight: 700;
	}

	.tab-selector {
		display: flex;
		gap: 24px;
		border-bottom: 1px solid rgba(var(--foreground-rgb), 0.1);
		padding-bottom: 0;
	}

	.tab-btn {
		background: none;
		border: none;
		padding: 0 0 16px 0;
		font-family: var(--font-sans);
		font-size: 18px;
		color: var(--foreground-200);
		cursor: pointer;
		position: relative;
		transition: color 0.3s;
	}

	.tab-btn:hover {
		color: var(--foreground);
	}

	.tab-btn.active {
		color: var(--foreground);
	}

	.tab-btn.active::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: 2px;
		background: var(--foreground);
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
	}

	.label {
		font-family: var(--font-mono);
		font-size: 12px;
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

	.project-media-link {
		display: block;
		text-decoration: none;
	}

	.project-media {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: rgba(var(--foreground-rgb), 0.05);
	}

	.project-media img,
	.project-media video {
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

	.tool-card {
		padding: 0px 40px;
		border: 1px solid rgba(var(--foreground-rgb), 0.08);
		max-width: 800px;
		align-self: start;
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
		transition:
			color 0.3s,
			border-color 0.3s;
		margin-right: 24px;
	}

	.view-project:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	.tool-actions {
		display: flex;
		flex-wrap: wrap;
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

		.tool-card {
			padding: 24px;
		}
	}
</style>

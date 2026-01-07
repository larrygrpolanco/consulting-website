<script lang="ts">
	import { page } from '$app/state';
	import { projects } from '$lib/data/projects';

	const slug = $derived(page.params.slug);
	const project = $derived(projects.find((p) => p.slug === slug));
	const nextProject = $derived(
		projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length]
	);
</script>

<svelte:head>
	{#if project}
		<title>{project.title} | Chaone Labs</title>
	{:else}
		<title>Project Not Found | Chaone Labs</title>
	{/if}
</svelte:head>

{#if project}
	<main class="project-lab-detail">
		<header class="project-lab-hero">
			<h1>{project.title}</h1>
			<p class="project-lab-lead">{project.description}</p>
		</header>

		<div class="project-lab-main">
			<div class="project-lab-content">
				<section class="project-lab-description">
					<p>{project.longDescription}</p>
				</section>

				<section class="project-lab-gallery">
					{#each project.media as item}
						<div class="gallery-lab-item">
							{#if item.type === 'image'}
								<img src={item.url} alt={item.alt || project.title} loading="lazy" />
							{:else}
								<video src={item.url} autoplay loop muted playsinline></video>
							{/if}
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
				<div class="sidebar-section">
					<span class="sidebar-label">Client</span>
					<span class="sidebar-value">{project.client}</span>
				</div>
				<div class="sidebar-section">
					<span class="sidebar-label">Status</span>
					<span class="sidebar-value">Completed / Open Source</span>
				</div>
				<div class="sidebar-footer" style="padding-top: 20px; border-top: 1px solid rgba(0,33,71,0.1); margin-top: 20px;">
					<a href="/lab" class="btn-lab" style="width: 100%; justify-content: center;">BACK TO LAB</a>
				</div>
			</aside>
		</div>

		<footer class="project-lab-nav">
			<div class="nav-prev">
				<!-- Could add prev project if needed -->
			</div>
			<div class="nav-next">
				<span class="sidebar-label">Next Project</span>
				<a href="/lab/{nextProject.slug}" class="next-project-title" style="display: block; margin-top: 8px;">
					{nextProject.title} →
				</a>
			</div>
		</footer>
	</main>
{:else}
	<main class="project-not-found">
		<h1>Project not found</h1>
		<p><a href="/lab">Back to Lab</a></p>
	</main>
{/if}

<style>
	:global(body) {
		scroll-snap-type: none;
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
		gap: 2rem;
	}
</style>

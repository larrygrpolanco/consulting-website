<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>Lab | Chaone Labs</title>
</svelte:head>

<Nav />

<main class="lab-container">
	<header class="lab-header">
		<h1>The Lab</h1>
		<p>
			Open research technologies for education and linguistics. We build tools that bridge the gap between pedagogy and software.
		</p>
	</header>

	<div class="lab-grid">
		{#each projects as project}
			<article class="card-lab">
				<div class="card-lab-meta">
					<span class="card-lab-status">STATUS: PRODUCTION</span>
					<span class="card-lab-year">{project.year}</span>
				</div>
				
				<div class="card-lab-media">
					{#if project.media[0].type === 'image'}
						<img src={project.media[0].url} alt={project.media[0].alt || project.title} />
					{:else}
						<video src={project.media[0].url} autoplay loop muted playsinline></video>
					{/if}
				</div>

				<div class="card-lab-content">
					<div class="card-lab-tag-row">
						{#each project.tags.slice(0, 2) as tag}
							<span class="card-lab-tag">{tag}</span>
						{/each}
					</div>
					<h2 class="card-lab-title">{project.title}</h2>
					<p class="card-lab-description">{project.description}</p>
				</div>

				<div class="card-lab-footer">
					<a href="/lab/{project.slug}" class="btn-lab primary">
						CASE STUDY
					</a>
					{#if project.slug === 'project-3'}
						<button class="btn-lab">
							ACCESS TOOL
						</button>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</main>

<style>
	:global(body) {
		scroll-snap-type: none;
	}

	.card-lab-tag-row {
		display: flex;
		gap: 8px;
		margin-bottom: 8px;
	}
</style>

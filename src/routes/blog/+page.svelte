<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | 차원 Chaone Labs</title>
</svelte:head>

<Nav />

<main class="blog-container">
	<header class="blog-header">
		<h1 class="text-serif">Blog<sup class="count">({data.posts.length})</sup></h1>
		<div class="sidebar-header"><span>LATEST INSIGHTS</span></div>
		<p class="description">
			A collection of thoughts on language, technology, and the intersection of both. We aim to document our research and development process.
		</p>
	</header>

	<div class="blog-list-wrapper">
		<div class="list-header">
			<span class="header-label">DATE</span>
			<span class="header-label">TITLE</span>
		</div>
		<ul class="blog-list">
			{#each data.posts as post}
				<li class="blog-list-item">
					<a href="/blog/{post.slug}" class="blog-link">
						<div class="date-wrapper">
							<span class="date">{post.date.replaceAll('-', '.')}</span>
						</div>
						<div class="title-wrapper">
							<span class="title">{post.title}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.blog-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 160px 5vw 100px;
		display: grid;
		grid-template-columns: 350px 1fr;
		gap: 80px;
	}

	@media (max-width: 1024px) {
		.blog-container {
			grid-template-columns: 1fr;
			gap: 40px;
		}
	}

	.blog-header {
		position: sticky;
		top: 160px;
		height: fit-content;
	}

	.blog-header h1 {
		font-size: clamp(40px, 6vw, 80px);
		margin-bottom: 40px;
	}

	.count {
		font-size: 0.3em;
		vertical-align: super;
		margin-left: 0.2em;
		font-family: var(--font-mono);
		font-weight: 400;
		color: var(--foreground-200);
	}

	.sidebar-header {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
		margin-bottom: 16px;
		padding-bottom: 8px;
		border-bottom: 1px solid rgba(0, 33, 71, 0.1);
	}

	.description {
		font-size: 16px;
		line-height: 1.6;
		color: var(--foreground-200);
	}

	.list-header {
		display: grid;
		grid-template-columns: 120px 1fr;
		padding: 12px 0;
		border-bottom: 1px solid rgba(0, 33, 71, 0.1);
		margin-bottom: 20px;
	}

	.header-label {
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.1em;
		color: var(--foreground-200);
	}

	.blog-list {
		list-style: none;
		padding: 0;
	}

	.blog-list-item {
		border-bottom: 1px solid rgba(0, 33, 71, 0.05);
	}

	.blog-link {
		display: grid;
		grid-template-columns: 120px 1fr;
		padding: 24px 0;
		transition: all 0.3s var(--default-transition-timing-function);
		align-items: center;
	}

	.blog-link:hover {
		padding-left: 10px;
	}

	.date {
		font-family: var(--font-mono);
		font-size: 14px;
		color: var(--foreground-200);
	}

	.title {
		font-size: 24px;
		font-family: var(--font-serif);
		font-weight: 700;
	}

	@media (max-width: 600px) {
		.blog-link {
			grid-template-columns: 1fr;
			gap: 8px;
		}
		
		.list-header {
			display: none;
		}
	}
</style>

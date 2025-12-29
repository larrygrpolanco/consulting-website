<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | 차원 Chaone Labs</title>
</svelte:head>

<Nav />

<main class="post-container">
	<article class="post">
		<header class="post-header">
			<div class="post-meta">
				<span class="label">DATE</span>
				<span class="value">{data.meta.date.replaceAll('-', '.')}</span>
				<span class="label">AUTHOR</span>
				<span class="value">{data.meta.author}</span>
			</div>
			<h1 class="text-serif">{data.meta.title}</h1>
			{#if data.meta.tags}
				<div class="tags">
					{#each data.meta.tags as tag}
						<span class="tag">#{tag}</span>
					{/each}
				</div>
			{/if}
		</header>

		<div class="post-content">
			<data.content />
		</div>

		<footer class="post-footer">
			<a href="/blog" class="back-link">← BACK TO BLOG</a>
		</footer>
	</article>

	<aside class="post-sidebar">
		<div class="sidebar-section">
			<span class="sidebar-label">SHARE</span>
			<div class="share-links">
				<a href="#">X</a>
				<a href="#">LINKEDIN</a>
			</div>
		</div>
		<div class="sidebar-section">
			<span class="sidebar-label">EST. READING TIME</span>
			<span class="sidebar-value">5 MIN</span>
		</div>
	</aside>
</main>

<style>
	.post-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 160px 5vw 100px;
		display: grid;
		grid-template-columns: 1fr 250px;
		gap: 80px;
	}

	@media (max-width: 1024px) {
		.post-container {
			grid-template-columns: 1fr;
		}
		.post-sidebar {
			display: none;
		}
	}

	.post {
		max-width: 800px;
	}

	.post-header {
		margin-bottom: 60px;
		border-bottom: 1px solid rgba(0, 33, 71, 0.1);
		padding-bottom: 40px;
	}

	.post-meta {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 8px 16px;
		margin-bottom: 32px;
		align-items: center;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
	}

	.value {
		font-size: 14px;
		font-family: var(--font-mono);
	}

	.post-header h1 {
		font-size: clamp(32px, 5vw, 56px);
		line-height: 1.1;
		margin-bottom: 24px;
	}

	.tags {
		display: flex;
		gap: 12px;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--accent);
		text-transform: uppercase;
	}

	.post-content {
		font-size: 18px;
		line-height: 1.7;
		color: var(--foreground);
	}

	/* Markdown Styling */
	:global(.post-content h2) {
		font-size: 32px;
		margin: 48px 0 24px;
	}

	:global(.post-content p) {
		margin-bottom: 24px;
	}

	:global(.post-content pre) {
		background: #f8f8f8;
		padding: 24px;
		border: 1px solid rgba(0, 33, 71, 0.1);
		margin: 32px 0;
		overflow-x: auto;
		font-family: var(--font-mono);
		font-size: 14px;
		line-height: 1.5;
	}

	:global(.post-content code) {
		background: #f0f0f0;
		padding: 2px 4px;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	:global(.post-content ul, .post-content ol) {
		margin-bottom: 24px;
		padding-left: 24px;
	}

	:global(.post-content li) {
		margin-bottom: 12px;
	}

	.post-footer {
		margin-top: 80px;
		padding-top: 40px;
		border-top: 1px solid rgba(0, 33, 71, 0.1);
	}

	.back-link {
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.1em;
		font-weight: 700;
	}

	.post-sidebar {
		position: sticky;
		top: 160px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.sidebar-label {
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
		margin-bottom: 12px;
		display: block;
	}

	.share-links {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.share-links a {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--foreground-200);
	}

	.sidebar-value {
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 700;
	}
</style>

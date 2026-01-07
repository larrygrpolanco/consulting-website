<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | 차원 Chaone Labs</title>
</svelte:head>



<main class="post-container">
	<article class="post">
		<header class="post-header">
			<div class="post-meta">
				<span class="label">DATE</span>
				<span class="value">{data.meta.date.replaceAll('-', '.')}</span>
				<span class="label">AUTHOR</span>
				<span class="value">{data.meta.author}</span>
				<span class="label">READING TIME</span>
				<span class="value">5 MIN</span>
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
</main>

<style>
	.post-container {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 40px 20px 100px;
		display: flex;
		justify-content: center;
		overflow-x: hidden;
	}

	.post {
		width: 100%;
		max-width: 720px;
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
		text-transform: uppercase;
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
		flex-wrap: wrap;
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
		font-size: clamp(24px, 4vw, 32px);
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
		max-width: 100%;
	}

	:global(.post-content code) {
		background: #f0f0f0;
		padding: 2px 4px;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
		word-break: break-word;
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

	@media (max-width: 768px) {
		.post-container {
			padding: 24px 20px 80px;
		}
		
		.post-header {
			margin-bottom: 40px;
		}

		.post-meta {
			grid-template-columns: 1fr;
			gap: 4px;
		}

		.label {
			margin-top: 8px;
		}

		.label:first-child {
			margin-top: 0;
		}
	}
</style>

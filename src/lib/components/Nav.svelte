<script lang="ts">
	// Navigation component
</script>

<nav class="nav">
	<div class="col">
		<div class="nav-logo">
			<a href="/">
				<span class="logo-text">차원 Chaone Labs</span>
			</a>
		</div>
	</div>
	<div class="col">
		<div class="nav-items text-sans">
			<div class="nav-item"><a href="/lab">lab</a></div>
			<div class="nav-item"><a href="/blog">blog</a></div>
			<div class="nav-item"><a href="/about">about</a></div>
			<div class="nav-item"><a href="mailto:larry@kyeollab.io" class="accent">contact</a></div>
		</div>
	</div>
</nav>

<style>
	.logo-text {
		font-family: var(--font-serif);
		font-weight: 900;
		font-size: 20px;
		letter-spacing: -0.02em;
	}

	.col:first-child {
		flex: 1;
	}

	.col:nth-child(2) {
		flex: 2;
		justify-content: flex-end;
		display: flex;
	}

	.accent {
		color: var(--accent) !important;
	}
</style>

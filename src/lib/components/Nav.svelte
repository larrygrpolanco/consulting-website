<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { contactModalOpen } from '$lib/stores/modal';
</script>

<nav class="nav" aria-label="Main Navigation">
	<div class="nav-inner">
		<!-- Logo on Left -->
		<div class="nav-logo">
			<a href="/" aria-label="Home" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
				<img src={logo} alt="Chaone Labs Logo" class="logo-img" />
				<span class="logo-text"></span>
			</a>
		</div>
		
		<!-- Links on Right -->
		<div class="nav-links">
			<a href="/lab" class="nav-link">lab</a>
			<a href="/services" class="nav-link">services</a>
			<a href="/blog" class="nav-link">blog</a>
			<a href="/about" class="nav-link">about</a>
			<button class="nav-link contact-link" onclick={() => contactModalOpen.set(true)}>contact</button>
		</div>
	</div>
</nav>

<style>
	.nav {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		padding: 24px 5vw;
		z-index: 1000;
		background: rgba(245, 245, 240, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		/* border-bottom: 1px solid rgba(0, 33, 71, 0.05); */
	}


	.nav-inner {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start; /* Logo top aligned or center? User said "top to bottom" for sites. */
	}

	.nav-logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 12px;
	}

	.logo-img {
		height: 96px; 
		width: auto;
		display: block;
		transition: height 0.3s ease;
	}

	.logo-text {
		font-family: var(--font-sans);
		font-size: 32px; 
		font-weight: 600;
		color: var(--foreground);
		letter-spacing: -0.02em;
	}

	.nav-links {
		display: flex;
		flex-direction: column; /* Vertical stack */
		gap: 8px; 
		align-items: flex-end; /* Align to right */
		text-align: right;
	}

	.nav-link {
		font-family: var(--font-sans);
		font-size: 15px; /* Increased size (13 -> 15) */
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		color: var(--foreground-200);
		text-decoration: none;
		transition: color 0.2s ease-out;
		display: block;
		padding: 4px 0;
	}

	.nav-link:hover {
		color: var(--foreground);
	}

	.contact-link {
		color: var(--accent);
	}

	button.nav-link {
		background: none;
		border: none;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.nav {
			padding: 20px 5vw;
		}

		.nav-inner {
			align-items: flex-start;
		}

		.logo-text {
			display: none; /* Disappear on smaller screens */
		}

		.logo-img {
			height: 96px; /* Logo gets bigger on mobile per request */
		}
	}
</style>

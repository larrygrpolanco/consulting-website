<script lang="ts">
	import { tick } from 'svelte';
	import { gsap } from 'gsap';
	import { contactModalOpen } from '$lib/stores/modal';

	let servicesRef: HTMLElement;

	$effect(() => {
		animateIn();
	});

	async function animateIn() {
		await tick();
		gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.fromTo('.hero-section', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
				.fromTo(
					'.service-item',
					{ y: 40, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
					'-=0.4'
				)
				.fromTo(
					'.philosophy-section',
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.6 },
					'-=0.4'
				);
		}, servicesRef);
	}
</script>

<svelte:head>
	<title>Collaborate | 차원 Chaone Labs</title>
</svelte:head>

<main bind:this={servicesRef} class="services-container">
	<section class="hero-section">
		<h1 class="headline">Collaborate</h1>
		<p class="sub-headline">
			We take on a small number of collaborations each year at the intersection of language, data, and technology. If your work overlaps with ours, let's talk!
		</p>
	</section>

	<div class="services-grid">
		<section class="service-item">
			<h2 class="label">01 / RESEARCH TOOLS</h2>
			<div class="content">
				<h3>Tools for qualitative and quantitative research</h3>
				<p>
					We've built custom analysis pipelines, data cleaning workflows, and methodology sandboxes — mostly for our own research, sometimes for collaborators. If you're doing discourse analysis, corpus work, or applied NLP and need something built, this is the kind of thing we do.
				</p>
				<div class="project-feature">
					<div class="feature-label">FEATURED PROJECT</div>
					<a href="/lab/llm-temperature-consistency" class="project-link">
						<span class="project-name">LLM Temperature & Consistency</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">02 / EDUCATIONAL SOFTWARE</h2>
			<div class="content">
				<h3>Learning tools built around actual curricula</h3>
				<p>
					We've built curriculum-aligned practice apps, vocabulary tools, and interactive assessments — starting from what the learner actually needs, not a generic EdTech template. Most of this work comes from collaborating directly with instructors who know their students.
				</p>
				<div class="project-feature">
					<div class="feature-label">FEATURED PROJECT</div>
					<a href="/lab/korean-learning" class="project-link">
						<span class="project-name">LLM-Assisted Korean Learning Platform</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">03 / INTERACTIVE WEBSITES</h2>
			<div class="content">
				<h3>Research and conference experiences that aren't just PDFs</h3>
				<p>
					We've built conference companion apps and interactive research sites that let audiences engage with the work instead of just read about it. Good for dissertations, posters, or any research that benefits from being explored rather than presented.
				</p>
				<div class="project-feature">
					<div class="feature-label">FEATURED PROJECT</div>
					<a href="/lab/mall-lifelong-learning" class="project-link">
						<span class="project-name">MALL for Lifelong Learning</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">04 / CONSULTING & WORKSHOPS</h2>
			<div class="content">
				<h3>Practical guidance on AI and data strategy</h3>
				<p>
					We help departments and researchers figure out where AI tools actually fit — and where they don't. This has looked like curriculum audits, responsible AI integration workshops, and data strategy for research teams. Grounded in real experience, not vendor talking points.
				</p>
				<div class="project-feature">
					<div class="feature-label">FEATURED PROJECT</div>
					<a href="/lab/ita-trainer" class="project-link">
						<span class="project-name">ITA Interactional Competence Trainer</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		</section>
	</div>

	<section class="philosophy-section">
		<h2 class="label">PHILOSOPHY</h2>
		<div class="content">
			<blockquote class="philosophy-quote">
				"We're researchers who build software and tools that work the way you work — not software that forces you to adapt."
			</blockquote>
		</div>
	</section>

	<section class="cta-section">
		<p class="cta-text">Have an idea? Let's talk.</p>
		<button class="cta-button" onclick={() => contactModalOpen.set(true)}>Get in Touch</button>
	</section>
</main>

<style>
	.services-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 5vw 100px;
		display: flex;
		flex-direction: column;
		gap: 120px;
	}

	.hero-section {
		opacity: 0;
		max-width: 900px;
	}

	.headline {
		font-size: clamp(64px, 5vw, 64px);
		line-height: 1.1;
		margin-bottom: 32px;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.sub-headline {
		font-size: clamp(18px, 1.5vw, 24px);
		color: var(--foreground-200);
		line-height: 1.5;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
		margin-bottom: 24px;
	}

	.services-grid {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}

	.service-item {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 40px;
		opacity: 0;
	}

	.service-item h3 {
		font-size: 32px;
		margin-bottom: 24px;
		font-weight: 600;
	}

	.service-item p {
		font-size: 18px;
		color: var(--foreground-200);
		line-height: 1.6;
		margin-bottom: 32px;
		max-width: 800px;
	}

	.philosophy-section {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 40px;
		opacity: 0;
		padding-top: 80px;
		border-top: 1px solid rgba(var(--foreground-rgb), 0.1);
	}

	.philosophy-quote {
		font-size: clamp(24px, 3vw, 36px);
		font-style: italic;
		line-height: 1.4;
		max-width: 800px;
		font-weight: 400;
		color: var(--accent);
	}

	.cta-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		padding-top: 40px;
	}

	.cta-text {
		font-size: 24px;
		font-family: var(--font-serif);
		color: var(--foreground-200);
	}

	.cta-button {
		display: inline-block;
		padding: 20px 40px;
		background-color: var(--foreground);
		color: var(--background);
		border: none;
		cursor: pointer;
		font-family: var(--font-sans);
		text-decoration: none;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 14px;
		transition:
			transform 0.3s,
			background-color 0.3s;
	}

	.cta-button:hover {
		transform: translateY(-2px);
		background-color: var(--accent);
	}

	.project-feature {
		margin-bottom: 24px;
		background: rgba(var(--foreground-rgb), 0.03);
		padding: 24px;
		border-left: 1px solid var(--accent);
	}

	.feature-label {
		font-family: var(--font-mono);
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--foreground-200);
		margin-bottom: 8px;
	}

	.project-link {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: var(--foreground);
		font-family: var(--font-mono);
		font-size: 14px;
		transition: color 0.3s;
	}

	.project-link:hover {
		color: var(--accent);
	}

	.project-name {
		font-weight: 600;
	}

	.arrow {
		transition: transform 0.3s;
	}

	.project-link:hover .arrow {
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		.service-item,
		.philosophy-section {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.services-container {
			padding-top: 40px;
			gap: 80px;
		}

		.headline {
			font-size: 36px;
		}

		.service-item h3 {
			font-size: 24px;
		}
	}
</style>

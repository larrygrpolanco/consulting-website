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
	<title>Services | 차원 Chaone Labs</title>
</svelte:head>

<main bind:this={servicesRef} class="services-container">
	<section class="hero-section">
		<h1 class="headline">What We Build</h1>
		<p class="sub-headline">
			Software for language research and education. We turn your ideas into working tools—research
			pipelines, learning apps, interactive websites.
		</p>
	</section>

	<div class="services-grid">
		<section class="service-item">
			<h2 class="label">01 / RESEARCH TOOLS</h2>
			<div class="content">
				<h3>Custom software for qualitative analysis.</h3>
				<p>
					Automate your coding schemes with custom pipelines. We turn manual processes—genre analysis,
					discourse tracking, move-step coding—into reproducible workflows.
				</p>
				<ul class="sub-fields">
					<li>Custom Analysis Scripts</li>
					<li>Data Cleaning</li>
					<li>Methodology Sandboxes</li>
				</ul>
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
				<h3>Learning apps built for your curriculum.</h3>
				<p>
					Custom practice apps aligned to your syllabus. Vocabulary trainers, grammar exercises, and
					interactive assessments with no generic content.
				</p>
				<ul class="sub-fields">
					<li>Curriculum Companions</li>
					<li>Interactive Assessments</li>
					<li>Teacher Dashboards</li>
				</ul>
				<div class="project-feature">
					<div class="feature-label">FEATURED PROJECT</div>
					<a href="/lab/taped-chinese" class="project-link">
						<span class="project-name">Taped Chinese</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">03 / INTERACTIVE WEBSITES</h2>
			<div class="content">
				<h3>Websites for research and conferences.</h3>
				<p>
					Interactive experiences for your research. Conference companion apps and data visualizations
					that let audiences explore your work, not just read it.
				</p>
				<ul class="sub-fields">
					<li>Conference Companion Apps</li>
					<li>Interactive White Papers</li>
					<li>Grant Impact Tools</li>
				</ul>
				<div class="project-feature">
					<div class="feature-label">FEATURED PROJECT</div>
					<a href="/lab/kpop-research-app" class="project-link">
						<span class="project-name">K-Pop Accents Research Explorer</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">04 / CONSULTING & WORKSHOPS</h2>
			<div class="content">
				<h3>AI integration and data strategy.</h3>
				<p>
					Practical guidance for departments and researchers. We help you integrate AI tools
					responsibly through curriculum audits, data cleaning, and staff training.
				</p>
				<ul class="sub-fields">
					<li>AI Curriculum Audits</li>
					<li>Data Strategy</li>
					<li>Technical Workshops</li>
				</ul>
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
				"We're researchers who learned to code. We build software that works the way you work—not
				software that forces you to adapt."
			</blockquote>
		</div>
	</section>

	<section class="cta-section">
		<button class="cta-button" onclick={() => contactModalOpen.set(true)}>Start a Project</button>
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

	.capabilities {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 24px;
	}

	.capabilities li {
		font-size: 14px;
		line-height: 1.5;
		color: var(--foreground-200);
	}

	.capabilities li strong {
		display: block;
		color: var(--foreground);
		margin-bottom: 4px;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 0.05em;
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
		justify-content: center;
		padding-top: 40px;
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

	.sub-fields {
		list-style: none;
		padding: 0;
		margin-bottom: 32px;
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.sub-fields li {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--foreground-200);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.sub-fields li:not(:last-child)::after {
		content: '|';
		margin-left: 12px;
		opacity: 0.3;
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

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--accent);
		background: rgba(var(--accent-rgb), 0.1);
		padding: 4px 8px;
		border-radius: 4px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
</style>

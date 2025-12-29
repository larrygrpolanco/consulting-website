<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { tick } from 'svelte';
	import { gsap } from 'gsap';

	let servicesRef: HTMLElement;

	$effect(() => {
		animateIn();
	});

	async function animateIn() {
		await tick();
		gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.fromTo('.hero-section',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8 }
			)
			.fromTo('.service-item',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
				'-=0.4'
			)
			.fromTo('.philosophy-section',
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

<Nav />

<main bind:this={servicesRef} class="services-container">
	<section class="hero-section">
		<h1 class="headline">We build software that understands your research.</h1>
		<p class="sub-headline">
			A design and technology studio for educators, linguists, and researchers. We bridge the gap between academic theory and production-grade code.
		</p>
	</section>

	<div class="services-grid">
		<section class="service-item">
			<h2 class="label">01 / RESEARCH TOOLS</h2>
			<div class="content">
				<h3>Automate your analysis. Keep the nuance.</h3>
				<p>
					Qualitative research is powerful, but manual coding is slow. We build custom tools that automate your specific frameworks—whether it’s genre analysis, move-step coding, or discourse tracking.
				</p>
				<ul class="capabilities">
					<li><strong>Custom Analysis Scripts:</strong> Turn your manual coding schemes into automated workflows.</li>
					<li><strong>Data Cleaning:</strong> We prepare messy, large-scale datasets for serious analysis.</li>
					<li><strong>Methodology Sandboxes:</strong> Test your theories on real data before you publish.</li>
				</ul>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">02 / EDUCATIONAL SOFTWARE</h2>
			<div class="content">
				<h3>Learning tools that actually match your syllabus.</h3>
				<p>
					Off-the-shelf language apps don’t know your curriculum. We build bespoke applications wrapped around your textbook and your teaching methods. Give your students practice that directly prepares them for your exams.
				</p>
				<ul class="capabilities">
					<li><strong>Curriculum Companions:</strong> Custom apps trained on your specific vocabulary and grammar lists.</li>
					<li><strong>Interactive Assessments:</strong> AI-powered roleplays and simulations with strict pedagogical guardrails.</li>
					<li><strong>Teacher Dashboards:</strong> See exactly where your students are struggling in real-time.</li>
				</ul>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">03 / INTERACTIVE PRESENTATIONS</h2>
			<div class="content">
				<h3>Don't just present your findings. Let them play with them.</h3>
				<p>
					Static slides are for the past. We turn your research papers and conference talks into interactive web experiences. Allow your audience to manipulate variables, explore your dataset, and engage with your work live.
				</p>
				<ul class="capabilities">
					<li><strong>Conference Companion Apps:</strong> Real-time mobile tools for your audience to use during your talk.</li>
					<li><strong>Interactive White Papers:</strong> Web-based publications that bring static data to life.</li>
					<li><strong>Grant Impact Tools:</strong> Public-facing educational sites to satisfy "Broader Impacts" requirements.</li>
				</ul>
			</div>
		</section>

		<section class="service-item">
			<h2 class="label">04 / STRATEGIC CONSULTING</h2>
			<div class="content">
				<h3>Navigate the AI shift with confidence.</h3>
				<p>
					AI is changing how we teach and research. Don’t rely on generic advice from tech companies. Get guidance from experts who understand Applied Linguistics, data privacy, and the realities of the classroom.
				</p>
				<ul class="capabilities">
					<li><strong>AI Curriculum Audits:</strong> We help you integrate AI into your program safely and effectively.</li>
					<li><strong>Data Strategy:</strong> Professional cleaning and organization of your research or student data.</li>
					<li><strong>Technical Workshops:</strong> Practical training for staff on using LLMs and data tools.</li>
				</ul>
			</div>
		</section>
	</div>

	<section class="philosophy-section">
		<h2 class="label">PHILOSOPHY</h2>
		<div class="content">
			<blockquote class="philosophy-quote">
				"We practice Methodology as Code. We build software that respects the nuance of research and the texture of learning."
			</blockquote>
		</div>
	</section>

	<section class="cta-section">
		<a href="mailto:larry@kyeollab.io" class="cta-button">Start a Project</a>
	</section>
</main>

<style>
	.services-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 160px 5vw 100px;
		display: flex;
		flex-direction: column;
		gap: 120px;
	}

	.hero-section {
		opacity: 0;
		max-width: 900px;
	}

	.headline {
		font-size: clamp(40px, 5vw, 64px);
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
		font-size: 11px;
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
		text-decoration: none;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 14px;
		transition: transform 0.3s, background-color 0.3s;
	}

	.cta-button:hover {
		transform: translateY(-2px);
		background-color: var(--accent);
	}

	@media (max-width: 768px) {
		.service-item, .philosophy-section {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.services-container {
			padding-top: 120px;
			gap: 80px;
		}

		.headline {
			font-size: 36px;
		}

		.service-item h3 {
			font-size: 24px;
		}

		.capabilities {
			grid-template-columns: 1fr;
		}
	}
</style>

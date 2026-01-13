<script lang="ts">
	import { tick } from 'svelte';
	import { gsap } from 'gsap';

	let aboutRef: HTMLElement;

	$effect(() => {
		animateIn();
	});

	async function animateIn() {
		await tick();
		gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.fromTo(
				'.section',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
			).fromTo(
				'.socials a',
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
				'-=0.4'
			);
		}, aboutRef);
	}
</script>

<svelte:head>
	<title>About | 차원 Chaone Labs</title>
</svelte:head>

<main bind:this={aboutRef} class="about-container">
	<section class="section section-bio">
		<h2 class="label">BIO</h2>
		<div class="content">
			<p>
				<strong>차원 Chaone Labs</strong> is a research and development studio for language education
				and linguistics. We build custom software—research tools, learning apps, and interactive websites.
				Run by applied linguists and educators who understand technologies.
			</p>
		</div>
	</section>

	<section class="section section-team">
		<h2 class="label">THE TEAM</h2>
		<div class="team-grid">
			<div class="member">
				<h3 class="member-name">Larry Grullon-Polanco, M.A.</h3>
				<p class="member-role">Cofounder & Lead Engineer</p>
				<p class="member-desc">
					Applied Linguist & Engineer specializing in the intersection of Discourse Analysis, LLMs,
					and Full-Stack Development.
				</p>
			</div>
			<div class="member">
				<h3 class="member-name">Jihye Kim, Ph.D.</h3>
				<p class="member-role">Cofounder & Research Director</p>
				<p class="member-desc">
					Lead Researcher ensuring every thing we do is grounded in current pedagogical theory and
					qualitative rigor.
				</p>
			</div>
		</div>
	</section>

	<section class="section section-story">
		<h2 class="label">WHY WE EXIST</h2>
		<div class="content">
			<p>
				Most research and teaching software is built by people who don't do research or teaching.
				They build what they think we need, not what we actually need.
			</p>
			<br />
			<p>
				We're applied linguists who believe in the power of technology to transform education and
				research. We custom build tools for people and their needs.
			</p>
			<br />
			<p>Our software is specific, transparent, and built to last.</p>
		</div>
	</section>

	<section class="section section-connect">
		<h2 class="label">CONNECT</h2>
		<div class="content">
			<p>
				For inquiries, please <a href="mailto:larrygrpolanco@gmail.com" class="accent"
					>email me</a
				>
			</p>
		</div>
	</section>

	<div class="socials">
		<a href="https://github.com/larrygrpolanco" target="_blank" rel="noopener noreferrer">github</a>
		<a href="#" target="_blank" rel="noopener noreferrer">linkedin</a>
		<a href="#" target="_blank" rel="noopener noreferrer">X</a>
	</div>
</main>

<style>
	.about-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 5vw 100px;
		display: flex;
		flex-direction: column;
		gap: 80px;
	}

	.section {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 40px;
		opacity: 0;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
		margin-top: 0.5em;
	}

	.content p {
		font-size: clamp(18px, 1.5vw, 24px);
		max-width: 800px;
		line-height: 1.5;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 40px;
	}

	.member-name {
		font-size: 24px;
		margin-bottom: 4px;
		font-style: normal;
		font-weight: 700;
	}

	.member-role {
		font-family: var(--font-sans);
		text-transform: uppercase;
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 0.1em;
		color: var(--accent);
		margin-bottom: 16px;
	}

	.member-desc {
		font-size: 16px;
		color: var(--foreground-200);
		max-width: 400px;
	}

	.accent {
		color: var(--accent);
		font-weight: 600;

	}

	.socials {
		padding-top: 40px;
		border-top: 1px solid rgba(0, 33, 71, 0.1);
		display: flex;
		gap: 24px;
	}

	.socials a {
		font-family: var(--font-mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--foreground-200);
		transition: color 0.3s;
	}

	.socials a:hover {
		color: var(--foreground);
	}

	@media (max-width: 768px) {
		.section {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.about-container {
			padding-top: 40px;
			gap: 60px;
		}
	}
</style>

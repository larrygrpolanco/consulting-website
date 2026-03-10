<script lang="ts">
	import { gsap } from 'gsap';
	import { contactModalOpen } from '$lib/stores/modal';

	let isOpen = $state(false);
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	let modalEl: HTMLElement;
	let cardEl: HTMLElement;

	$effect(() => {
		const unsubscribe = contactModalOpen.subscribe((val) => {
			if (val && !isOpen) {
				isOpen = true;
				animateOpen();
			} else if (!val && isOpen) {
				animateClose(() => {
					isOpen = false;
					status = 'idle';
					errorMessage = '';
				});
			}
		});
		return unsubscribe;
	});

	function animateOpen() {
		// Wait a tick for the DOM to render
		requestAnimationFrame(() => {
			if (!modalEl || !cardEl) return;
			gsap.fromTo(modalEl, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
			gsap.fromTo(
				cardEl,
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }
			);
		});
	}

	function animateClose(onComplete: () => void) {
		if (!modalEl || !cardEl) {
			onComplete();
			return;
		}
		gsap.to(cardEl, { y: 20, opacity: 0, duration: 0.2, ease: 'power2.in' });
		gsap.to(modalEl, { opacity: 0, duration: 0.25, ease: 'power2.in', onComplete });
	}

	function close() {
		contactModalOpen.set(false);
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === modalEl) close();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = 'sending';

		const formData = new FormData(e.target as HTMLFormElement);
		formData.append('access_key', '2943f377-7b08-410e-84c2-2aca5ee79791');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});
			const data = await response.json();

			if (data.success) {
				status = 'success';
				(e.target as HTMLFormElement).reset();
				setTimeout(() => close(), 3000);
			} else {
				status = 'error';
				errorMessage = data.message || 'Something went wrong. Please try again.';
			}
		} catch {
			status = 'error';
			errorMessage = 'Network error. Please try again.';
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="backdrop"
		bind:this={modalEl}
		onclick={handleBackdropClick}
		role="dialog"
		aria-modal="true"
		aria-label="Contact form"
	>
		<div class="card" bind:this={cardEl}>
			<div class="card-header">
				<span class="card-label">GET IN TOUCH</span>
				<button class="close-btn" onclick={close} aria-label="Close contact form">✕</button>
			</div>

			{#if status === 'success'}
				<div class="success-state">
					<p class="success-title">Message sent.</p>
					<p class="success-sub">I'll get back to you soon.</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit}>
					<div class="field">
						<label class="field-label" for="contact-name">NAME</label>
						<input
							id="contact-name"
							type="text"
							name="name"
							autocomplete="name"
							required
							disabled={status === 'sending'}
						/>
					</div>

					<div class="field">
						<label class="field-label" for="contact-email">EMAIL</label>
						<input
							id="contact-email"
							type="email"
							name="email"
							autocomplete="email"
							required
							disabled={status === 'sending'}
						/>
					</div>

					<div class="field">
						<label class="field-label" for="contact-message">MESSAGE</label>
						<textarea
							id="contact-message"
							name="message"
							rows="5"
							required
							disabled={status === 'sending'}
						></textarea>
					</div>

					{#if status === 'error'}
						<p class="error-msg">{errorMessage}</p>
					{/if}

					<button type="submit" class="submit-btn" disabled={status === 'sending'}>
						{status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 33, 71, 0.6);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		z-index: 2000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.card {
		background: var(--background);
		width: 100%;
		max-width: 560px;
		padding: 48px;
		position: relative;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
	}

	.card-label {
		font-family: var(--font-mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
	}

	.close-btn {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 16px;
		color: var(--foreground-200);
		padding: 4px 8px;
		line-height: 1;
		transition: color 0.2s;
	}

	.close-btn:hover {
		color: var(--foreground);
	}

	.field {
		margin-bottom: 32px;
	}

	.field-label {
		display: block;
		font-family: var(--font-mono);
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--foreground-200);
		margin-bottom: 8px;
	}

	.field input,
	.field textarea {
		width: 100%;
		background: none;
		border: none;
		border-bottom: 1px solid rgba(0, 33, 71, 0.2);
		padding: 8px 0;
		font-family: var(--font-sans);
		font-size: 16px;
		color: var(--foreground);
		outline: none;
		resize: none;
		transition: border-color 0.2s;
		box-sizing: border-box;
	}

	.field input:focus,
	.field textarea:focus {
		border-bottom-color: var(--accent);
	}

	.field input:disabled,
	.field textarea:disabled {
		opacity: 0.5;
	}

	.error-msg {
		font-family: var(--font-mono);
		font-size: 12px;
		color: #c0392b;
		margin-bottom: 24px;
	}

	.submit-btn {
		display: inline-block;
		padding: 16px 40px;
		background-color: var(--foreground);
		color: var(--background);
		border: none;
		cursor: pointer;
		font-family: var(--font-sans);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 13px;
		transition:
			background-color 0.3s,
			transform 0.3s;
		width: 100%;
	}

	.submit-btn:hover:not(:disabled) {
		background-color: var(--accent);
		transform: translateY(-2px);
	}

	.submit-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.success-state {
		padding: 40px 0;
		text-align: center;
	}

	.success-title {
		font-size: 28px;
		font-weight: 700;
		color: var(--foreground);
		margin-bottom: 8px;
	}

	.success-sub {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	@media (max-width: 768px) {
		.card {
			padding: 32px 24px;
		}

		.backdrop {
			align-items: flex-end;
			padding: 0;
		}

		.card {
			max-width: 100%;
			width: 100%;
		}
	}
</style>

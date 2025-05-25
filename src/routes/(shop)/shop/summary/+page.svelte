<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_API_URL, PUBLIC_STRIPE_API_KEY } from '$env/static/public';
	import Divider from '$lib/Components/Divider.svelte';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import { GLOBALS } from '$lib/data/Globals';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import { eCardCartStore, getEcardOptions, type ECardCart } from '$lib/stores/eCardCheckout';
	import { toastStore } from '$lib/stores/toast';
	import { loadStripe, type Stripe, type StripeCheckout } from '@stripe/stripe-js';
	import { onDestroy, onMount } from 'svelte';

	let stripe: Stripe | null = null;
	let stripeCheckout: StripeCheckout | null = null;
	let eCardCheckout: ECardCart | undefined = $state();
	let isLoading = $state(false);

	const isFreeCard = $derived.by(() => {
		return eCardCheckout?.eCardTemplate?.cost === 0;
	});

	const unsubscribe = eCardCartStore.subscribe((t) => {
		console.log(t);
		eCardCheckout = t;
	});

	const fetchClientSecret = () => {
		console.log('sku', eCardCheckout?.eCardTemplate?.sku);
		return fetch(`${PUBLIC_API_URL}/stripe/create-checkout-session`, {
			method: 'POST',
			credentials: 'include', // this is critical
			headers: {
				'Content-Type': 'application/json' // Set content type to JSON
			},
			body: JSON.stringify({ skus: [eCardCheckout?.eCardTemplate?.sku] })
		})
			.then((response) => response.json())
			.then((json) => json.checkoutSessionClientSecret);
	};

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_API_KEY);
		if (stripe) {
			stripe.initCheckout({ fetchClientSecret }).then((checkout) => {
				stripeCheckout = checkout;
				const paymentElement = checkout.createPaymentElement();
				paymentElement.mount('#payment-element');
			});
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	async function createECard() {
		const cardOptions = getEcardOptions();
		try {
			if (!eCardCheckout) {
				throw new Error('Card checkout not defined');
			}
			const res = await fetch(`${PUBLIC_API_URL}/ecards`, {
				method: 'POST',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					senderEmail: eCardCheckout.sender.email,
					eCardTemplateSku: eCardCheckout?.eCardTemplate?.sku,
					options: cardOptions,
					recipients: eCardCheckout.recipients
				})
			});
			const responseData = await res.json();
			if (res.ok) {
				console.log(responseData);
				toastStore.show({ message: 'Card Created', type: 'success' });
				eCardCartStore.clearCart();
				goto(`/shop/thank-you?eCard=${responseData.eCardNumber}`);
			} else {
				console.log(responseData);
				// toastStore.show({
				// 	message: 'There was an error',
				// 	type: 'error',
				// 	details: responseData.message
				// });
			}
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
			// toastStore.show({ message: 'There was an error', type: 'error' });
		}
	}

	function valid() {
		if (!eCardCheckout?.sender.email) {
			toastStore.show({ type: 'error', message: 'Email required' });
			isLoading = false;
			return false;
		}
		return true;
	}

	async function sendECard() {
		isLoading = true;
		console.log({ stripeCheckout, isFreeCard });
		try {
			if (!stripeCheckout && !isFreeCard) {
				isLoading = false;
				toastStore.show({ type: 'error', message: 'There was an error checking out' });
				console.log('Stripe has not loaded');
				return;
			}
			if (!eCardCheckout?.eCardTemplate) {
				isLoading = false;
				toastStore.show({ type: 'error', message: 'There was an error saving your card' });
				return;
			}
			if (stripeCheckout && !isFreeCard) {
				if (valid()) {
					await stripeCheckout.updateEmail(eCardCheckout?.sender?.email || '');
					await stripeCheckout.confirm({ redirect: 'if_required' }).then((result) => {
						console.log({ result });
						if (result.type === 'error') {
							toastStore.show({ type: 'error', message: 'There was an error processing payment' });
							isLoading = false;
							return;
						}
						if (result.type === 'success') {
							console.log('success');
							createECard();
						}
					});
				}
			}
		} catch (error) {
			toastStore.show({ type: 'error', message: 'There was an error processing payment' });
		}
	}
</script>

<Container className="px-4">
	{#if eCardCheckout !== undefined && eCardCheckout.eCardTemplate}
		<SidebarSection sectionTitle="Summary" stickySidebar>
			{#snippet content()}
				<SectionTitle title="Sender" />
				<div class="space-y-4">
					<TextInput
						id="senderName"
						label="Sender Name"
						value={eCardCheckout?.sender.name}
						onchange={(e) => eCardCartStore.updateSender('name', e.currentTarget.value)}
					/>

					<TextInput
						id="email"
						label="Sender Email"
						subLabel="Helps us assign this to your account if you create one"
						value={eCardCheckout?.sender.email}
						onchange={(e) => eCardCartStore.updateSender('email', e.currentTarget.value)}
					/>
				</div>
				<Divider />
				<SectionTitle title="Recipients" />
				{#each eCardCheckout?.recipients || [] as recipient, idx}
					<div>
						<div class="flex justify-between">
							<p>Recipient {idx + 1}</p>
							<button
								type="button"
								onclick={() => eCardCartStore.deleteRecipient(idx)}
								class="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-error-500"
							>
								<span class="sr-only">Remove</span>
								<svg
									class="size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						<div class="grid grid-cols-2 gap-3 w-full">
							<TextInput
								id={`recipientFirstName-${idx}`}
								label="First Name"
								bind:value={recipient.firstName}
								onchange={(e) =>
									eCardCartStore.updateRecipient(idx, 'firstName', e?.currentTarget.value)}
							/>
							<TextInput
								id={`recipientLastName-${idx}`}
								label="First Name"
								bind:value={recipient.lastName}
								onchange={(e) =>
									eCardCartStore.updateRecipient(idx, 'lastName', e?.currentTarget.value)}
							/>
							<TextInput
								id={`email-${idx}`}
								label="Email"
								bind:value={recipient.email}
								className="col-span-2"
								onchange={(e) =>
									eCardCartStore.updateRecipient(idx, 'email', e?.currentTarget.value)}
							/>
							<Divider className="col-span-2" />
						</div>
					</div>
				{/each}

				<div class="flex justify-end">
					<button class="btn" disabled={isLoading} onclick={eCardCartStore.addRecipient}
						>Add Recipients</button
					>
				</div>
				<Divider />
				{#if !isFreeCard}
					<SectionTitle title="Payment" />
					<div class="pt-4" id="payment-element"></div>
				{/if}
			{/snippet}
			{#snippet sidebarContent()}
				<SectionTitle titleClass="pt-4" title="Order Summary" />
				<ul role="list" class="divide-y divide-gray-200">
					<li class="flex px-4 py-6 sm:px-6">
						<div class="shrink-0">
							<img
								src={eCardCheckout?.eCardTemplate?.imageURL || GLOBALS.defaultECardImage}
								alt="Front of men&#039;s Basic Tee in black."
								class="w-20 rounded-md aspect-square"
							/>
						</div>
						<div class="ml-6 flex flex-1 flex-col">
							<div class="flex">
								<div class="min-w-0 flex-1">
									<h4 class="text-sm font-medium text-gray-700 hover:text-gray-800">
										{eCardCheckout?.eCardTemplate?.name}
									</h4>
									<p class="mt-1 text-sm text-gray-500">
										{eCardCheckout?.isCustom ? 'Custom' : 'Basic'}
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
				{#if eCardCheckout?.isCustom}
					<dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
						<div class="flex items-center justify-between">
							<dt class="text-sm">Subtotal</dt>
							<dd class="text-sm font-medium text-gray-900">$2.99</dd>
						</div>
						<div class="flex items-center justify-between">
							<dt class="text-sm">Taxes</dt>
							<dd class="text-sm font-medium text-gray-900">$0</dd>
						</div>
						<div class="flex items-center justify-between border-t border-gray-200 pt-6">
							<dt class="text-base font-medium">Total</dt>
							<dd class="text-base font-medium text-gray-900">$2.99</dd>
						</div>
					</dl>
				{/if}

				<div class="border-t border-gray-200 px-4 py-6 sm:px-6">
					<button type="submit" class="w-full btn" onclick={sendECard}
						>{eCardCheckout?.isCustom ? 'Place Order' : 'Send ECard'}</button
					>
				</div>
			{/snippet}
		</SidebarSection>
	{:else}
		<p>Error loading checkout</p>
	{/if}
</Container>

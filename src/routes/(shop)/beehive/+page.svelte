<script lang="ts">
	import { formatCurrency } from '$lib/util/formatCurrency';
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl sm:text-center">
			<h2
				class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance"
			>
				Join the BeeHive
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
				Unlock your sweetest planning experience yet. BeeHive Membership gives you everything you
				need to create beautiful, personalized, and automated events without the hassle.
			</p>
		</div>
		<div class="my-10 space-y-3 mx-auto max-w-10xl">
			<div class="w-full grid grid-cols-1 gap-8 lg:grid-cols-3">
				{@render subscriptionCard(
					'WorkerBee Member',
					'Perfect for sending occasional eCards',
					['A la cart eCards', 'Send via text, email, or shareable link'],
					0
				)}
				{@render subscriptionCard(
					'BumbleBee Member',
					'For busy bees who send often and want more privacy',
					[
						'No eCard expiration dates',
						'Private & password-protected eCards',
						'All eCards are free to use'
					],
					699
				)}
				{@render subscriptionCard(
					'VIBee Member',
					'For power users who want it all',
					[
						'Create with custom templates',
						'Access advanced editing tools',
						'Free access to FlightPlan — our subscription management service'
					],
					1699
				)}
			</div>
		</div>
	</div>
</div>

{#snippet subscriptionCard(name: string, description: string, features: string[], cost: number)}
	<div
		class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
	>
		<div>
			<h3 id="tier-hobby" class="text-base/7 font-semibold text-primary-600">{name}</h3>
			<div class="mt-4 flex items-baseline gap-x-2">
				<span class="text-5xl font-semibold tracking-tight text-gray-900"
					>{formatCurrency(cost)}</span
				>
				{#if cost > 0}
					<span class="text-base/7 font-semibold text-gray-600">/month</span>
				{/if}
			</div>
			<p class="mt-6 text-base/7 text-gray-600">
				{description}
			</p>
			<ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-600">
				{#each features as feature}
					<li class="flex gap-x-3">
						<svg
							class="h-6 w-5 flex-none text-primary-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							/>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<a
			href="#"
			aria-describedby="tier-hobby"
			class="mt-8 block rounded-md bg-primary-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
		>
			Get started today
		</a>
	</div>
{/snippet}

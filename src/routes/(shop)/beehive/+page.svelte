<script lang="ts">
	const features = [
		'Advanced Editing Tools',
		'Premium Template Collection',
		'Automated Sending',
		'Lifetime Access to Updates'
	];
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
		<div
			class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
		>
			<div class="p-8 sm:p-10 lg:flex-auto">
				<h3 class="text-3xl font-semibold tracking-tight text-gray-900">BeeHive Membership</h3>
				<p class="mt-6 text-base/7 text-gray-600">
					Take your planning to the next level with access to exclusive tools and features designed
					to save you time and make your creations shine.
				</p>
				<div class="mt-10 flex items-center gap-x-4">
					<h4 class="flex-none text-sAdvanced Editing Toolsm/6 font-semibold text-indigo-600">
						What’s included
					</h4>
					<div class="h-px flex-auto bg-gray-100"></div>
				</div>
				<ul
					role="list"
					class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
				>
					{#each features as feature}
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-indigo-600"
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
			<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
				<div
					class="rounded-2xl bg-transparent py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16 relative overflow-hidden h-full"
				>
					<div class="absolute inset-0">
						<img
							src="/images/pexels-sn-che-3918651-12391587.jpg"
							alt=""
							class="size-full object-cover opacity-25"
						/>
					</div>
					<div class="mx-auto max-w-xs px-8 relative">
						<div class="mt-6 flex items-center justify-start gap-x-4 font-semibold">
							<p class="text-5xl tracking-tight text-gray-500">$9.99</p>
							<div class="text-sm text-start">
								<p class="text-gray-600">USD</p>
								<p class="text-gray-600">Billed monthly</p>
							</div>
						</div>
						<a
							href="#"
							class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Get access</a
						>
						<!-- <p class="mt-6 text-xs/5 text-gray-600">
							Invoices and receipts available for easy company reimbursement
						</p> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

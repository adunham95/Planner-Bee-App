<script>
	import Container from '$lib/Container.svelte';
	import { eCardCartStore } from '$lib/stores/eCardCheckout';
</script>

<Container className="px-4">
	<div class="mx-auto max-w-4xl sm:text-center pt-20">
		<div class="flex justify-center mb-4">
			<img src="/images/flightPathLogo.svg" class="w-20" alt="FlightPlan Logo" />
		</div>
		<h2
			class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance"
		>
			FlightPlan
		</h2>
		<p class="text-base/6 font-semibold text-primary-600 mb-2 mt-5">
			Your Buzz-worthy E-Card Autopilot
		</p>
		<p class="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
			Let your greetings take flight! FlightPlan is your bee-autifully smart e-card
			autopilot—designed to deliver sweet messages right on time, every time
		</p>
	</div>

	<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
		<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
			<div class="flex flex-col">
				<dt class="text-base/7 font-semibold text-gray-900">
					<div class="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 text-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
							/>
						</svg>
					</div>
					Time Based Events
				</dt>
				<dd class="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
					<p class="flex-auto">
						Schedule e-card deliveries like clockwork for birthdays, anniversaries, and holidays.
						Never miss a moment—bee on time, every time.
					</p>
				</dd>
			</div>
			<div class="flex flex-col">
				<dt class="text-base/7 font-semibold text-gray-900">
					<div class="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-600">
						<svg
							class="size-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
							/>
						</svg>
					</div>
					Smart Names
				</dt>
				<dd class="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
					<p class="flex-auto">
						Every card gets a personal touch with automatic name insertion. No more manual
						editing—just heartfelt buzz, sent sweetly and personally.
					</p>
				</dd>
			</div>
			<div class="flex flex-col">
				<dt class="text-base/7 font-semibold text-gray-900">
					<div class="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 text-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
							/>
						</svg>
					</div>
					Analytics
				</dt>
				<dd class="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
					<p class="flex-auto">
						See which cards were sent, opened, and loved. Get a sneak peek at what’s buzzing next.
						Always insightful, always up to date.
					</p>
				</dd>
			</div>
		</dl>
	</div>

	<div
		class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none mb-4"
	>
		<div class="p-8 sm:p-10 lg:flex-auto">
			<h3 class="text-3xl font-semibold tracking-tight text-gray-900">FlightPlan Subscription</h3>
			<p class="mt-6 text-base/7 text-gray-600">Get started with your subscription</p>
			<div class="mt-10 flex items-center gap-x-4">
				<h4 class="flex-none text-sm/6 font-semibold text-primary-600">What’s included</h4>
				<div class="h-px flex-auto bg-gray-100"></div>
			</div>
			<ul
				role="list"
				class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
			>
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
					Full Catalog Access
				</li>
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
					Customization included
				</li>
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
					Dynamic Message Templates
				</li>
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
					Analytics Dashboard
				</li>
			</ul>
		</div>
		<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
			<div
				class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16 h-full"
			>
				<div class="mx-auto max-w-xs px-8">
					<p class="mt-6 flex items-baseline justify-center gap-x-2">
						<span class="text-5xl font-semibold tracking-tight text-gray-900">$4.99</span>
						<span class="text-sm/6 font-semibold tracking-wide text-gray-600">/mo</span>
					</p>
					<a
						href="/shop/ecard?saveOrder=false"
						onclick={() => eCardCartStore.enableFlightPlan()}
						class="mt-10 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
					>
						Get Started
					</a>
				</div>
			</div>
		</div>
	</div>
</Container>

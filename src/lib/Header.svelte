<script lang="ts">
	let mobileNabOpen = $state(false);

	interface route {
		title: string;
		path: string;
	}

	const companyName = 'Planner Bee';

	const routes: route[] = [
		{ title: 'ECards', path: '/shop/ecard' },
		{ title: 'About Us', path: '/about-us' },
		{ title: 'BeeHive', path: '/beehive' },
		{ title: 'FlightPlan', path: '/flightplan' },
		{ title: 'Roadmap', path: '/road-map' }
	];
	const profileRoutes: route[] = [];
</script>

<div class="bg-white">
	<header class="relative">
		<nav aria-label="Top">
			<!-- Top navigation -->
			<!-- <div class="bg-gray-900">
				<div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">
						Get free delivery on orders over $100
					</p>

					<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
						<a href="/sign-up" class="text-sm font-medium text-white hover:text-gray-100"
							>Create an account</a
						>
						<span class="h-6 w-px bg-gray-600" aria-hidden="true"></span>
						<a href="/sign-in" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a
						>
					</div>
				</div>
			</div> -->

			<!-- Secondary navigation -->
			<div class="bg-white">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="border-b border-gray-200">
						<div class="flex h-16 items-center justify-between">
							<!-- Logo (lg+) -->
							<div class="hidden lg:flex lg:items-center">
								<a href="/">
									<span class="sr-only">{companyName}</span>
									<img class="h-8 w-auto" src="/images/logo-brand.svg" alt="" />
								</a>
							</div>

							<div class="hidden h-full lg:flex">
								<div class="ml-8">
									<div class="flex h-full justify-center space-x-8">
										{#each routes as route}
											<a
												href={route.path}
												class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
												>{route.title}</a
											>
										{/each}
									</div>
								</div>
							</div>

							<!-- Mobile menu and search (lg-) -->
							<div class="flex flex-1 items-center lg:hidden">
								<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
								<button
									type="button"
									onclick={() => (mobileNabOpen = !mobileNabOpen)}
									class="relative inline-flex items-center justify-center rounded-md p-2 text-content-2 hover:bg-content-2 hover:text-content-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									aria-controls="mobile-menu"
									aria-expanded="false"
								>
									<span class="absolute -inset-0.5"></span>
									<span class="sr-only">Open menu</span>
									<!--
                    Icon when menu is closed.
        
                    Menu open: "hidden", Menu closed: "block"
                  -->
									<svg
										class={`${mobileNabOpen ? 'hidden' : 'block'} size-6`}
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
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
									<!--
                    Icon when menu is open.
        
                    Menu open: "block", Menu closed: "hidden"
                  -->
									<svg
										class={`${mobileNabOpen ? 'block' : 'hidden'} size-6`}
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
										data-slot="icon"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
									</svg>
								</button>
							</div>

							<!-- Logo (lg-) -->
							<a href="/" class="lg:hidden">
								<span class="sr-only">{companyName}</span>
								<img src="/images/logo-brand.svg" alt="" class="h-8 w-auto" />
							</a>

							<div class="flex flex-1 items-center justify-end">
								<div class="flex items-center lg:ml-8">
									<div class="flex space-x-8">
										<div class="flex">
											<a href="/account" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
												<span class="sr-only">Account</span>
												<svg
													class="size-6"
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
														d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
													/>
												</svg>
											</a>
										</div>
									</div>

									<span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

									<div class="flow-root">
										<a href="/shop/cart" class="group -m-2 flex items-center p-2">
											<svg
												class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
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
													d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
												/>
											</svg>
											<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
												>0</span
											>
											<span class="sr-only">items in cart, view bag</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<div class={`lg:hidden  ${mobileNabOpen ? 'block' : 'hidden'}`}>
		<!--
          Mobile menu overlay, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100"
            To: "opacity-0"
        -->
		<div class="fixed inset-0 z-20 bg-black/25" aria-hidden="true"></div>

		<!--
          Mobile menu, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
		<div
			class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
		>
			<div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
				<div class="pb-2 pt-3">
					<div class="flex items-center justify-between px-4">
						<div class="flex items-center">
							<img src="/images/logo-brand.svg" alt="" class="h-8 w-auto mr-2" />
							<h2 class=" text-xl font-semibold">{companyName}</h2>
						</div>
						<div class="-ml-2">
							<button
								type="button"
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span class="absolute -inset-0.5"></span>
								<span class="sr-only">Close menu</span>
								<svg
									class="size-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-3 space-y-1 px-2">
						{#each routes as route}
							<a
								href={route.path}
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
							>
								{route.title}
							</a>
						{/each}
					</div>
				</div>
				{#if profileRoutes.length > 0}
					<div class="pb-2 pt-4">
						<div class="flex items-center px-5">
							<div class="shrink-0">
								<img
									class="size-10 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</div>
						</div>
						<div class="mt-3 space-y-1 px-2">
							{#each profileRoutes as route}
								<a
									href={route.path}
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
								>
									{route.title}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- Filters -->
<section
	aria-labelledby="filter-heading"
	class="grid items-center border-t border-b border-gray-200"
>
	<h2 id="filter-heading" class="sr-only">Filters</h2>
	<div class="relative col-start-1 row-start-1 py-4">
		<div class="mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
			<div class="pr-6">
				<button
					type="button"
					class="group flex items-center font-medium text-gray-700"
					aria-controls="disclosure-1"
					aria-expanded="false"
				>
					<svg
						class="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
						aria-hidden="true"
						viewBox="0 0 20 20"
						fill="currentColor"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
							clip-rule="evenodd"
						/>
					</svg>
					2 Filters
				</button>
			</div>
			<div class="pl-6">
				<button type="button" class="text-gray-500">Clear all</button>
			</div>
		</div>
	</div>
	<div class="border-t border-gray-200 py-10" id="disclosure-1">
		<div class="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
			<div class="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
				<fieldset>
					<legend class="block font-medium">Price</legend>
					<div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="price-0"
										name="price[]"
										value="0"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="price-0" class="text-base text-gray-600 sm:text-sm">$0 - $25</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="price-1"
										name="price[]"
										value="25"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="price-1" class="text-base text-gray-600 sm:text-sm">$25 - $50</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="price-2"
										name="price[]"
										value="50"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="price-2" class="text-base text-gray-600 sm:text-sm">$50 - $75</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="price-3"
										name="price[]"
										value="75"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="price-3" class="text-base text-gray-600 sm:text-sm">$75+</label>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend class="block font-medium">Color</legend>
					<div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="color-0"
										name="color[]"
										value="white"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="color-0" class="text-base text-gray-600 sm:text-sm">White</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="color-1"
										name="color[]"
										value="beige"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="color-1" class="text-base text-gray-600 sm:text-sm">Beige</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="color-2"
										name="color[]"
										value="blue"
										type="checkbox"
										checked
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="color-2" class="text-base text-gray-600 sm:text-sm">Blue</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="color-3"
										name="color[]"
										value="brown"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="color-3" class="text-base text-gray-600 sm:text-sm">Brown</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="color-4"
										name="color[]"
										value="green"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="color-4" class="text-base text-gray-600 sm:text-sm">Green</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="color-5"
										name="color[]"
										value="purple"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="color-5" class="text-base text-gray-600 sm:text-sm">Purple</label>
						</div>
					</div>
				</fieldset>
			</div>
			<div class="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
				<fieldset>
					<legend class="block font-medium">Size</legend>
					<div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="size-0"
										name="size[]"
										value="xs"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="size-0" class="text-base text-gray-600 sm:text-sm">XS</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="size-1"
										name="size[]"
										value="s"
										type="checkbox"
										checked
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="size-1" class="text-base text-gray-600 sm:text-sm">S</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="size-2"
										name="size[]"
										value="m"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="size-2" class="text-base text-gray-600 sm:text-sm">M</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="size-3"
										name="size[]"
										value="l"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="size-3" class="text-base text-gray-600 sm:text-sm">L</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="size-4"
										name="size[]"
										value="xl"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="size-4" class="text-base text-gray-600 sm:text-sm">XL</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="size-5"
										name="size[]"
										value="2xl"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="size-5" class="text-base text-gray-600 sm:text-sm">2XL</label>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend class="block font-medium">Category</legend>
					<div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="category-0"
										name="category[]"
										value="all-new-arrivals"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="category-0" class="text-base text-gray-600 sm:text-sm"
								>All New Arrivals</label
							>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="category-1"
										name="category[]"
										value="tees"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="category-1" class="text-base text-gray-600 sm:text-sm">Tees</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="category-2"
										name="category[]"
										value="objects"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="category-2" class="text-base text-gray-600 sm:text-sm">Objects</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="category-3"
										name="category[]"
										value="sweatshirts"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="category-3" class="text-base text-gray-600 sm:text-sm">Sweatshirts</label>
						</div>
						<div class="flex gap-3">
							<div class="flex h-5 shrink-0 items-center">
								<div class="group grid size-4 grid-cols-1">
									<input
										id="category-4"
										name="category[]"
										value="pants-and-shorts"
										type="checkbox"
										class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
									/>
									<svg
										class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											class="opacity-0 group-has-checked:opacity-100"
											d="M3 8L6 11L11 3.5"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											class="opacity-0 group-has-indeterminate:opacity-100"
											d="M3 7H11"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<label for="category-4" class="text-base text-gray-600 sm:text-sm"
								>Pants &amp; Shorts</label
							>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
	<div class="col-start-1 row-start-1 py-4">
		<div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
			<div class="relative inline-block">
				<div class="flex">
					<button
						type="button"
						class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
						id="menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						Sort
						<svg
							class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>

				<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
				<div
					class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-hidden"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						<!--
                Active: "bg-gray-100 outline-hidden", Not Active: ""

                Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
              -->
						<a
							href="#"
							class="block px-4 py-2 text-sm font-medium text-gray-900"
							role="menuitem"
							tabindex="-1"
							id="menu-item-0">Most Popular</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-500"
							role="menuitem"
							tabindex="-1"
							id="menu-item-1">Best Rating</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-500"
							role="menuitem"
							tabindex="-1"
							id="menu-item-2">Newest</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id: string;
		isOpen?: boolean;
		title?: string;
		onClose: () => void;
		children: Snippet;
	}

	let { isOpen = $bindable(false), title, onClose, children }: Props = $props();
</script>

{#if isOpen}
	<div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0"></div>

		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
					<!--
            Slide-over panel, show/hide based on slide-over state.
  
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
					<div class="pointer-events-auto w-screen max-w-md">
						<div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
							<div class="px-4 sm:px-6">
								<div class="flex items-start justify-between">
									<h2 class="text-base font-semibold text-gray-900" id="slide-over-title">
										{title}
									</h2>
									<div class="ml-3 flex h-7 items-center">
										<button
											type="button"
											onclick={onClose}
											class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
										>
											<span class="absolute -inset-2.5"></span>
											<span class="sr-only">Close panel</span>
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
													d="M6 18 18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div class="relative mt-6 flex-1 px-4 sm:px-6">
								{@render children()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<script lang="ts">
	import type { RoadmapItem } from '$lib/data/roadMapItems';

	interface Props {
		item: RoadmapItem;
		index: number;
	}

	const { item, index = 0 }: Props = $props();

	// Determine status colors
	const statusColors: { [key: string]: any } = {
		completed: {
			bg: 'bg-success-100',
			border: 'border-success-500',
			icon: 'bg-success-500',
			text: 'text-success-800',
			connector: 'bg-success-500'
		},
		current: {
			bg: 'bg-primary-100',
			border: 'border-primary-500',
			icon: 'bg-primary-500',
			text: 'text-primary-800',
			connector: 'bg-gray-300'
		},
		upcoming: {
			bg: 'bg-gray-200',
			border: 'border-gray-500',
			icon: 'bg-gray-500 ',
			text: 'text-gray-700',
			connector: 'bg-gray-300'
		}
	};

	let animationDelay = $derived(`${index * 0.1}s`);
</script>

<div
	class="roadmap-item flex flex-row items-start gap-4 animate-fade-in pr-1"
	style="animation-delay: {animationDelay};"
>
	<div class="flex-shrink-0 mr-4">
		<div
			class="w-8 h-8 rounded-full flex items-center justify-center {statusColors[item.status]
				.icon} text-white shadow-md"
		>
			{#if item.status === 'completed'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else if item.status === 'current'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
						clip-rule="evenodd"
					/>
				</svg>
			{/if}
		</div>
	</div>

	<!-- Content -->
	<div
		class="flex-1 animate-scale-in group transform transition duration-300 hover:-translate-y-1"
		style="animation-delay: calc({animationDelay} + 0.2s);"
	>
		<div
			class="p-5 rounded-lg border-l-4 shadow-md transition-all duration-300 hover:shadow-lg
        {statusColors[item.status].bg} {statusColors[item.status].border}"
		>
			<!-- Version tag -->
			<div class="flex items-center justify-between">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            {statusColors[item.status].text} bg-white bg-opacity-30"
				>
					v{item.version}
				</span>
				<span class="text-sm text-gray-600">{item.date}</span>
			</div>

			<!-- Title -->
			<h3 class="mt-2 text-lg font-semibold {item.status === 'upcoming' ? 'text-gray-700 ' : ''}">
				{item.title}
			</h3>

			<!-- Description -->
			<p class="mt-2 text-sm {item.status === 'upcoming' ? 'text-gray-600 ' : ''}">
				{item.description}
			</p>

			<!-- Features list -->
			{#if item.features && item.features.length > 0}
				<ul class={`mt-3 space-y-1 ${statusColors[item.status].text}`}>
					{#each item.features as feature}
						<li class="flex items-start">
							<svg
								class="h-5 w-5 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm {item.status === 'upcoming' ? 'text-gray-600' : ''}"
								>{feature}</span
							>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>

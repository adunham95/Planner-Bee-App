<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ListItem {
		title: string;
		description?: string;
		disabled?: boolean;
		onClick?: () => void;
		href?: string;
		icon: Snippet;
		bgColor?: string;
	}

	interface Props {
		listItems?: ListItem[];
	}

	const { listItems = [] }: Props = $props();
</script>

<ul role="list" class="mt-6 grid grid-cols-1 gap-6 py-6 sm:grid-cols-2">
	{#each listItems as item}
		<li class="flow-root">
			<div
				class={`relative -m-2 flex items-center space-x-4 rounded-xl p-2 ${item.disabled ? ' cursor-not-allowed' : 'hover:bg-gray-50'} `}
			>
				<div
					class={`flex size-16 shrink-0 items-center justify-center rounded-lg text-white ${item.disabled ? ' bg-gray-800' : item.bgColor || 'bg-primary-500'}`}
				>
					{@render item.icon()}
				</div>
				<div>
					<h3 class="text-sm font-medium text-gray-900">
						{#if item.href}
							<a href={item.href} class="focus:outline-hidden">
								{#if !item.disabled}
									<span class="absolute inset-0" aria-hidden="true"></span>
								{/if}
								<span>View ECard</span>
								<span aria-hidden="true"> &rarr;</span>
							</a>
						{:else if item.onClick}
							<button class="focus:outline-hidden" onclick={item.onClick}>
								{#if !item.disabled}
									<span class="absolute inset-0 cursor-pointer" aria-hidden="true"></span>
								{/if}
								<span>
									<span>{item.title}</span>
									<span aria-hidden="true"> &rarr;</span>
								</span></button
							>
						{/if}
					</h3>
					{#if item.description}
						<p class="mt-1 text-sm text-gray-500">{item.description}</p>
					{/if}
				</div>
			</div>
		</li>
	{/each}
</ul>

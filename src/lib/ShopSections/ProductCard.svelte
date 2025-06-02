<script lang="ts">
	import { GLOBALS } from '$lib/data/Globals';
	import { formatCurrency } from '$lib/util/formatCurrency';
	import { truncateString } from '$lib/util/truncateString';
	import type { Product } from '../../app';

	interface Props {
		hidePrice?: boolean;
		template: Product;
		href?: string;
		onClick?: (product: Product) => void;
	}

	const { template, href, hidePrice = false, onClick }: Props = $props();
</script>

<div class="inline-flex flex-col text-center lg:w-auto truncate">
	{#if onClick}
		<button onclick={() => onClick(template)} class="group relative">
			{@render templateData(template, hidePrice)}
		</button>
	{:else if href}
		<a href={href || '#'} class="group relative">
			{@render templateData(template, hidePrice)}
		</a>
	{:else}
		<div class="group relative">
			{@render templateData(template, hidePrice)}
		</div>
	{/if}
</div>

{#snippet templateData(template: Product, hidePrice?: boolean)}
	<img
		src={template.imageURL || GLOBALS.defaultECardImage}
		alt="Black machined steel pen with hexagonal grip and small white logo at top."
		class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
	/>
	<div class="mt-4">
		<div class=" flex items-top justify-between text-sm font-medium text-gray-900">
			<h3 class=" text-left">{template.name}</h3>
			{#if !hidePrice}
				<p>{formatCurrency(template.price)}</p>
			{/if}
		</div>
		<p class="text-xs text-gray-500 italic truncate w-full text-start">
			{truncateString(template.description, 30)}
		</p>
	</div>
{/snippet}

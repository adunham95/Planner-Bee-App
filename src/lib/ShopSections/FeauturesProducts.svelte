<script lang="ts">
	import type { Product } from '../../app';
	import ProductCard from './ProductCard.svelte';

	interface Props {
		title?: string;
		href?: string;
		products: Product[];
	}

	const { products, title = 'Featured Products', href }: Props = $props();

	const visibleProducts = products.slice(0, 4);
</script>

<div class="bg-white">
	<div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
		<div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
			{#if href}
				<a
					{href}
					class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
				>
					See everything
					<span aria-hidden="true"> &rarr;</span>
				</a>
			{/if}
		</div>

		<div class="relative mt-8">
			<div class="relative -mb-6 w-full overflow-x-auto pb-6">
				<ul
					role="list"
					class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
				>
					{#each visibleProducts as prod}
						<li class="pb-4">
							<ProductCard template={prod} href={`/shop/${prod.productType}/${prod.sku}`} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import type { Product } from '../../app';
	import ProductCard from './ProductCard.svelte';

	interface Props {
		hidePrice?: boolean;
		onClick?: (product: Product) => void;
		products: Product[];
	}

	const { products, hidePrice, onClick }: Props = $props();
	const visibleProducts = products;
</script>

<div class="relative mt-8">
	<div class="relative -mb-6 w-full overflow-x-auto pb-6">
		<ul
			role="list"
			class="mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:mx-6 lg:mx-0 grid lg:space-x-0 gap-4"
		>
			{#each visibleProducts as prod}
				<li class="pb-4">
					<ProductCard
						{hidePrice}
						{onClick}
						template={prod}
						href={`/shop/${prod.productType.toLowerCase()}/${prod.sku}`}
					/>
				</li>
			{/each}
		</ul>
	</div>
</div>

<script>
	import Container from '$lib/Container.svelte';
	import ECardBox from '$lib/ShopSections/ECardBox.svelte';
	import ProductCard from '$lib/ShopSections/ProductCard.svelte';

	const { data } = $props();
	$inspect(data);
</script>

<Container>
	<div class="p-4">
		<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.products as product}
				<li>
					<ProductCard
						hidePrice
						template={product}
						href={`/admin/${product.productType.toLowerCase()}/${product.sku}`}
					/>
				</li>
			{/each}
		</ul>
	</div>
</Container>

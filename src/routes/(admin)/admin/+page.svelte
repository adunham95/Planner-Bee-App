<script>
	import Container from '$lib/Container.svelte';
	import ECardBox from '$lib/ShopSections/ECardBox.svelte';

	const { data } = $props();
	$inspect(data);
</script>

<Container>
	<div class="p-4">
		<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.products as product}
				<li>
					<ECardBox template={product} href={`/admin/ecardtemplate/${product.sku}`} />
				</li>
			{/each}
		</ul>
	</div>
</Container>

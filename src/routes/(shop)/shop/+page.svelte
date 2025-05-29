<script lang="ts">
	import Container from '$lib/Container.svelte';
	import ProductList from '$lib/ShopSections/ProductList.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<ProductList products={data.products} />
</Container>

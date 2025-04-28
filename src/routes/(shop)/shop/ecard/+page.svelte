<script>
	import PageHeader from '$lib/Components/PageHeader.svelte';
	import Container from '$lib/Container.svelte';
	import ProductList from '$lib/ShopSections/ProductList.svelte';

	const { data } = $props();
</script>

<Container className="px-2">
	<PageHeader title="ECards" />
	<ProductList products={data.products} />
</Container>

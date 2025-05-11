<script>
	import FilterBar from '$lib/Components/FilterBar.svelte';
	import PageHeader from '$lib/Components/PageHeader.svelte';
	import Container from '$lib/Container.svelte';
	import ProductList from '$lib/ShopSections/ProductList.svelte';

	const { data } = $props();

	let products = [...data.products];

	$inspect(data);
</script>

<Container className="px-2">
	<PageHeader title="ECards" />
	<FilterBar
		filters={{
			Category: [
				{ id: 'category-1', title: 'Birthday' },
				{ id: 'category-2', title: 'Anniversary' }
			],
			Elements: [
				{ id: 'mealTrainIncluded', title: 'Meal Train' },
				{ id: 'rsvpEnabled', title: 'RSVP' },
				{ id: 'signaturesEnabled', title: 'Signatures' },
				{ id: 'potluckEnabled', title: 'Potluck Sign Up' }
			]
		}}
	/>
	<ProductList {products} />
</Container>

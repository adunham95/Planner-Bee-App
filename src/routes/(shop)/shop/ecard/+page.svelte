<script>
	import FilterBar from '$lib/Components/FilterBar.svelte';
	import PageHeader from '$lib/Components/PageHeader.svelte';
	import Container from '$lib/Container.svelte';
	import ProductList from '$lib/ShopSections/ProductList.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { eCardCartStore } from '$lib/stores/eCardCheckout.js';

	const { data } = $props();

	let products = [...data.products];

	$inspect(data);

	onMount(() => {
		const saveOrderCache = page.url.searchParams.get('saveOrder');
		console.log(saveOrderCache);
		if (!saveOrderCache) {
			console.log('clear cart');
			eCardCartStore.clearCart();
		}
	});
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

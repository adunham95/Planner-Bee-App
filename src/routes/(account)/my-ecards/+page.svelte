<script>
	import OrderRow from '$lib/Components/Orders/OrderRow.svelte';
	import PageHeader from '$lib/Components/PageHeader.svelte';
	import Container from '$lib/Container.svelte';
</script>

<Container className="px-4 lg:px-1">
	<PageHeader title="Orders" />
	<OrderRow
		cardNumber="ECARD-M9XEDZ2D-0MX1"
		status="Delivered"
		template={{
			sku: 'TEST',
			name: 'Test Template',
			description: 'This is a test ecard',
			cost: 0,
			includedOptions: [],
			imageURL: '/images/pexels-rdne-5848004.jpg',
			visible: true,
			premium: false
		}}
	/>
</Container>

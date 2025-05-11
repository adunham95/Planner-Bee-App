<script>
	import OrderRow from '$lib/Components/Orders/OrderRow.svelte';
	import PageHeader from '$lib/Components/PageHeader.svelte';
	import Container from '$lib/Container.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container className="px-4 lg:px-1">
	<PageHeader title="Orders" />
	{#each data.eCards || [] as eCard}
		<OrderRow cardNumber={eCard.eCardNumber} status={eCard.status} template={eCard.eCardTemplate} />
	{/each}
</Container>

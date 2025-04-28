<script>
	import ECard from '$lib/ECard/ECard.svelte';

	const { data } = $props();
</script>

<ECard
	components={data.eCard.options.map((comp) => {
		return {
			id: comp.id,
			value: comp.value,
			ecardComponentID: comp.eCardComponent.ecardComponentID,
			order: comp.eCardComponent.order
		};
	})}
/>

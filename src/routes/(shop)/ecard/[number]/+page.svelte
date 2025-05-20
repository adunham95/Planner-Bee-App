<script>
	import ECard from '$lib/ECard/ECard.svelte';

	const { data } = $props();
</script>

<div class="mx-auto max-w-[750px] p-4">
	<ECard
		roundedCorners
		components={data.eCard.options.map((comp) => {
			return {
				id: comp.id,
				value: comp.value,
				ecardComponentID: comp.eCardComponent.ecardComponentID,
				order: comp.eCardComponent.order
			};
		})}
	/>
</div>

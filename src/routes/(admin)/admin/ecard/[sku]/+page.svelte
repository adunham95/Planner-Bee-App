<script lang="ts">
	import ECardComponentsSection from '$lib/Components/Admin Components/Editable Sections/ECardComponentsSection.svelte';
	import ProductDetailsSection from '$lib/Components/Admin Components/Editable Sections/ProductDetailsSection.svelte';
	import Container from '$lib/Container.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container className="pt-3 pb-6 px-5">
	<ProductDetailsSection initialProduct={data.product} productType="ecard" />
	<ECardComponentsSection eCardComponents={data.components} />
</Container>

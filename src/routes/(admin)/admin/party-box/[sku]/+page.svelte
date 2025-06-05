<script lang="ts">
	import ECardComponentsSection from '$lib/Components/Admin Components/Editable Sections/ECardComponentsSection.svelte';
	import ProductDetailsSection from '$lib/Components/Admin Components/Editable Sections/ProductDetailsSection.svelte';
	import Drawer from '$lib/Components/Overlay/Drawer.svelte';
	import Container from '$lib/Container.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container className="pt-3 pb-6 px-5">
	<ProductDetailsSection initialProduct={data.product} />
	<ECardComponentsSection
		partyBoxTemplateID={data.product.partyBoxTemplate?.id}
		eCardComponents={data.product?.partyBoxTemplate?.eCardComponents}
	/>
</Container>

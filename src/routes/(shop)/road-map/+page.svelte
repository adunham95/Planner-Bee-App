<script>
	import PageHeader from '$lib/Components/PageHeader.svelte';
	import RoadMap from '$lib/Components/RoadMap/RoadMap.svelte';
	import Container from '$lib/Container.svelte';
	import { productRoadmap } from '$lib/data/roadMapItems';
</script>

<Container size="small">
	<PageHeader title="Product Roadmap" />
	<RoadMap items={productRoadmap} />
</Container>

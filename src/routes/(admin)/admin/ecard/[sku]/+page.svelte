<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import ECardComponentEdit from '$lib/Form/ECardComponentEdit.svelte';
	import EditProduct from '$lib/Form/EditProduct.svelte';
	import ProductCard from '$lib/ShopSections/ProductCard.svelte';
	import { toastStore } from '$lib/stores/toast.js';

	const { data } = $props();

	$inspect(data);

	const intialComponents = (data.components || []).map((comp: { [key: string]: any }) => {
		return {
			id: comp.id,
			value: {
				key: comp.key,
				label: comp.label,
				editable: comp.editable,
				ecardComponentID: comp.ecardComponentID,
				style: comp.style,
				default: comp.default,
				order: comp.order
			}
		};
	});

	let product = $state({
		id: data.product.id,
		name: data.product.name,
		sku: data.product.sku,
		imageURL: data.product.imageURL,
		description: data.product.description,
		visible: data.product.visible,
		featured: data.product.featured,
		price: data.product.price,
		productType: 'eCard'
	});

	interface ComponentType {
		id: string;
		value: {
			key: string;
			editable: boolean;
			ecardComponentID: string;
			style: string;
			default: string;
			order: number;
		};
	}

	let components = $state<ComponentType[]>(intialComponents);

	let componentList = $derived.by(() => {
		return components.map((c) => {
			return {
				id: c.id,
				ecardComponentID: c.value.ecardComponentID,
				style: c.value.style,
				value: c.value.default,
				default: c.value.default,
				order: c.value.order
			};
		});
	});

	async function saveProduct() {
		const url = `${PUBLIC_API_URL}/product/${product.id}`;

		try {
			const res = await fetch(url, {
				method: 'PATCH',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					sku: product.sku,
					name: product.name,
					description: product.description,
					cost: product.price,
					imageURL: product.imageURL,
					visible: product.visible
				})
			});
			const responseData = await res.json();
		} catch (error) {
			toastStore.show({ type: 'error', message: 'Something went wrong' });
		}

		console.log(url);
	}
</script>

<Container className="pt-3 pb-6 px-5">
	<SidebarSection sectionTitle="Details" stickyContent>
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="Details" />
			</div>
			<EditProduct onSave={saveProduct} bind:product />
		{/snippet}
		{#snippet content()}
			<div>
				<SectionTitle title="Details Preview" />
			</div>
			<div class="grid grid-cols-4">
				<ProductCard template={product} />
			</div>
		{/snippet}
	</SidebarSection>
	<SidebarSection sectionTitle="ECard Elements" className="pt-4" stickyContent>
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="ECard Elements" />
			</div>
			<ECardComponentEdit eCardID={data?.eCard?.id} bind:components />
		{/snippet}
		{#snippet content()}
			<div>
				<SectionTitle title="ECard Preview" />
			</div>
			<ECard roundedCorners components={componentList} />
		{/snippet}
	</SidebarSection>
</Container>

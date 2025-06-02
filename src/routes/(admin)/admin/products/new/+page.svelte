<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_API_URL } from '$env/static/public';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import EditProduct from '$lib/Form/EditProduct.svelte';
	import ProductCard from '$lib/ShopSections/ProductCard.svelte';
	import { toastStore } from '$lib/stores/toast.js';

	let product = $state({
		id: undefined,
		name: '',
		sku: '',
		imageURL: '',
		description: '',
		visible: true,
		featured: false,
		price: '0',
		productType: 'ecard'
	});

	async function saveProduct() {
		const url = `${PUBLIC_API_URL}/products`;

		try {
			const res = await fetch(url, {
				method: 'POST',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					sku: product.sku,
					name: product.name,
					description: product.description,
					price: parseInt(product.price),
					imageURL: product.imageURL,
					visible: product.visible,
					productType: product.productType,
					featured: product.featured
				})
			});
			if (res.ok) {
				const responseData = await res.json();
				toastStore.show({ type: 'success', message: `${product.name} created successfully` });
				console.log({ responseData });
				goto(`/admin/${product.productType}/${product.sku}`);
			} else {
				toastStore.show({ type: 'error', message: 'Something went wrong' });
			}
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
</Container>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_API_URL } from '$env/static/public';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import EditProduct from '$lib/Form/EditProduct.svelte';
	import ProductCard from '$lib/ShopSections/ProductCard.svelte';
	import { toastStore } from '$lib/stores/toast';
	import type { Product } from '../../../../app';

	interface Props {
		initialProduct?: Product;
		productType?: 'ecard';
	}

	const { initialProduct, productType = 'ecard' }: Props = $props();

	let product = $state({
		id: initialProduct?.id || '',
		name: initialProduct?.name || '',
		sku: initialProduct?.sku || '',
		imageURL: initialProduct?.imageURL || '',
		description: initialProduct?.description || '',
		visible: initialProduct?.visible || true,
		featured: initialProduct?.featured || false,
		price: initialProduct?.price || '0',
		productType
	});

	async function saveProduct() {
		console.log('save product');
		const url = initialProduct?.id
			? `${PUBLIC_API_URL}/products/${initialProduct?.id}`
			: `${PUBLIC_API_URL}/products`;

		const requestMethod = initialProduct?.id ? 'PATCH' : 'POST';

		console.log({ product });

		try {
			const { id, price, ...productDetails } = product;
			const res = await fetch(url, {
				method: requestMethod,
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					...productDetails,
					price: typeof price === 'string' ? parseInt(price) : price
				})
			});
			if (res.ok) {
				const responseData = await res.json();
				if (!initialProduct?.id) {
					toastStore.show({
						type: 'success',
						message: `${product.name} created successfully`
					});
					goto(`/admin/${product.productType}/${product.sku}`);
				} else {
					toastStore.show({
						type: 'success',
						message: `${product.name} saved successfully`
					});
				}
			} else {
				toastStore.show({ type: 'error', message: 'Something went wrong' });
			}
		} catch (error) {
			toastStore.show({ type: 'error', message: 'Something went wrong' });
		}
	}
</script>

<SidebarSection sectionTitle="Product Details" stickyContent>
	{#snippet sidebarContent()}
		<div>
			<SectionTitle title="Product Details" />
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

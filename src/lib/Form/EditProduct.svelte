<script lang="ts">
	import Container from '$lib/Container.svelte';
	import ImageUpload from '$lib/FormElements/ImageUpload.svelte';
	import Select from '$lib/FormElements/Select.svelte';
	import TextArea from '$lib/FormElements/TextArea.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import Toggle from '$lib/FormElements/Toggle.svelte';

	let {
		onSave,
		product = $bindable({
			name: '',
			sku: '',
			imageURL: '',
			description: '',
			visible: true,
			featured: false,
			price: '0',
			productType: '',
			eCardTemplateSKU: undefined
		})
	}: {
		onSave: () => void;
		product?: {
			name: string;
			imageURL: string;
			sku: string;
			description: string;
			visible: boolean;
			featured: boolean;
			price: string | number;
			productType: string;
			eCardTemplateSKU?: string;
		};
	} = $props();

	$inspect(product);
</script>

<Container className=" space-y-3 @container/form">
	<TextInput id="name" label="Name" bind:value={product.name} />
	<ImageUpload id="imageURL" label="Product Image" bind:value={product.imageURL} />
	<TextArea id="description" label="Description" bind:value={product.description} />
	<TextInput id="sku" label="SKU" bind:value={product.sku} />
	<Select
		id="productType"
		label="Product Type"
		options={[{ id: 'ecard', label: 'ECard' }]}
		bind:value={product.productType}
	/>
	<TextInput id="price" label="Price" bind:value={product.price} />
	<div class="flex py-1 justify-between">
		<Toggle id="visible" label="Visible" bind:checked={product.visible} />
		<Toggle id="featurd" label="Featured" bind:checked={product.featured} />
	</div>
	<button class="btn btn-primary w-full" onclick={onSave}>Save</button>
</Container>

<script lang="ts">
	import Container from '$lib/Container.svelte';
	import ImageUpload from '$lib/FormElements/ImageUpload.svelte';
	import TextArea from '$lib/FormElements/TextArea.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import Toggle from '$lib/FormElements/Toggle.svelte';

	let {
		onSave,
		data = $bindable({
			name: '',
			imageURL: '',
			sku: '',
			description: '',
			visible: true,
			premium: false,
			cost: 0,
			stripePriceID: '',
			stripeProductID: ''
		})
	}: {
		onSave: () => void;
		data?: {
			name: string;
			imageURL: string;
			sku: string;
			description: string;
			visible: boolean;
			premium: boolean;
			cost: number;
			stripeProductID: string;
			stripePriceID: string;
		};
	} = $props();

	$inspect(data);
</script>

<Container className=" space-y-3 @container/form">
	<TextInput id="name" label="Name" bind:value={data.name} />
	<ImageUpload id="imageURL" label="Product Image" bind:value={data.imageURL} />
	<TextInput id="sku" label="SKU" bind:value={data.sku} />
	<TextInput id="stripeProductID" label="Stripe Product ID" bind:value={data.stripeProductID} />
	<TextInput id="stripePriceID" label="Stripe Price ID" bind:value={data.stripePriceID} />
	<div class="flex py-1 justify-between">
		<TextInput id="price" label="Price" bind:value={data.cost} />
		<Toggle id="visible" label="Visible" bind:checked={data.visible} />
		<!-- <Toggle id="premium" label="Premium" bind:checked={data.premium} /> -->
	</div>
	<TextArea id="description" label="Description" bind:value={data.description} />
	<button class="btn btn-primary w-full" onclick={onSave}>Save</button>
</Container>

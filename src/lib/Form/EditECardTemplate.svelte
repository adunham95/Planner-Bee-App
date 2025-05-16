<script lang="ts">
	import Container from '$lib/Container.svelte';
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
			cost: 0
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
		};
	} = $props();

	$inspect(data);
</script>

<Container className=" space-y-3 @container/form">
	<TextInput id="name" label="Name" bind:value={data.name} />
	<TextInput id="imageURL" label="Image Path" bind:value={data.imageURL} />
	<TextInput id="sku" label="SKU" bind:value={data.sku} />
	<TextInput id="price" label="Price" bind:value={data.cost} />
	<div class="flex py-1 justify-between">
		<Toggle id="visible" label="Visible" bind:checked={data.visible} />
		<Toggle id="premium" label="Premium" bind:checked={data.premium} />
	</div>
	<TextArea id="description" label="Description" bind:value={data.description} />
	<button class="btn btn-primary w-full" onclick={onSave}>Save</button>
</Container>

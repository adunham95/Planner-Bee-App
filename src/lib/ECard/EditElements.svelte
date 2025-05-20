<script lang="ts">
	import { eCardComponents } from '$lib/data/ecardComponents';
	import ColorList from '$lib/FormElements/ColorList.svelte';
	import ImageUpload from '$lib/FormElements/ImageUpload.svelte';
	import TextArea from '$lib/FormElements/TextArea.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';

	interface Props {
		name?: string;
		hideLabel?: boolean;
		componentKey: string;
		label?: string;
		value?: string | null;
		defaultValue?: string;
		options?: string[];
		className?: string;
		isDevMode?: boolean;
	}

	let {
		name = 'textInput',
		componentKey,
		label = undefined,
		defaultValue = '',
		value = $bindable(),
		hideLabel = false,
		options = [],
		className = '',
		isDevMode = false
	}: Props = $props();

	let component = $derived(
		(eCardComponents || []).find((c) => {
			return c.id === componentKey;
		})
	);

	let allOptions = $derived.by(() => {
		if (component?.options) {
			return [defaultValue, ...component.options, ...options];
		}
		return options;
	});

	let editComponentKey = $derived.by(() => {
		if (isDevMode) {
			return component?.devComponentKey || component?.editComponentKey;
		}
		return component?.editComponentKey;
	});

	console.log({ component, componentKey });
</script>

<div class={className}>
	{#if !component}
		<p>Error loading {componentKey}</p>
	{:else if editComponentKey === 'text'}
		<TextInput label={label || component.name} id={name} {hideLabel} bind:value />
	{:else if editComponentKey === 'colorInput'}
		<TextInput label={label || component.name} id={name} type="color" {hideLabel} bind:value />
	{:else if editComponentKey === 'textArea'}
		<TextArea
			label={label || component.name}
			id={name}
			{hideLabel}
			class="col-span-2"
			rows={4}
			bind:value
		/>
	{:else if editComponentKey === 'colorList'}
		<ColorList
			groupName={component.id}
			label={label || component.name}
			id={name}
			options={allOptions}
			bind:value
		/>
	{:else if editComponentKey === 'imageUpload'}
		<ImageUpload label={label || component.name} id={name} {hideLabel} bind:value />
	{/if}
</div>

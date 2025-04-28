<script lang="ts">
	import { eCardComponents } from '$lib/data/ecardComponents';
	import ColorList from '$lib/FormElements/ColorList.svelte';
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
	}

	let {
		name = 'textInput',
		componentKey,
		label = undefined,
		defaultValue = '',
		value = $bindable(),
		hideLabel = false,
		options = []
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

	console.log({ component, componentKey });
</script>

{#if !component}
	<p>Error loading {componentKey}</p>
{:else if component.editComponentKey === 'text'}
	<TextInput label={label || component.name} id={name} {hideLabel} bind:value />
{:else if component.editComponentKey === 'colorInput'}
	<TextInput label={label || component.name} id={name} type="color" {hideLabel} bind:value />
{:else if component.editComponentKey === 'textArea'}
	<TextArea
		label={label || component.name}
		id={name}
		{hideLabel}
		class="col-span-2"
		rows={4}
		bind:value
	/>
{:else if component.editComponentKey === 'colorList'}
	<ColorList
		groupName={component.id}
		label={label || component.name}
		id={name}
		options={allOptions}
		bind:value
	/>
{/if}

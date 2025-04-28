<script lang="ts">
	import { eCardComponents } from '$lib/data/ecardComponents';
	import Banner from './DisplayComponent/Banner.svelte';
	import Color from './DisplayComponent/Color.svelte';
	import Event from './DisplayComponent/Event.svelte';
	import Message from './DisplayComponent/Message.svelte';
	import Title from './DisplayComponent/Title.svelte';

	interface Props {
		ecardComponentID: string;
		value: string;
		style?: string;
		defaultValue?: string;
	}

	let { ecardComponentID, value, style = '', defaultValue = '' }: Props = $props();

	let component = $derived(eCardComponents.find((c) => c.id === ecardComponentID));
</script>

<!-- <div class="relative group"> -->
{#if !component}
	<p>Error loading {ecardComponentID}</p>
{:else if component.displayComponentKey === 'custom-color'}
	<div></div>
{:else if component.displayComponentKey === 'message'}
	<Message value={value || defaultValue} {style} />
{:else if component.displayComponentKey === 'color'}
	<Color {value} />
{:else if component.displayComponentKey === 'title'}
	<Title title={value} />
{:else if component.displayComponentKey === 'banner'}
	<Banner img={value || defaultValue} {style} />
{:else if component.displayComponentKey === 'event'}
	<Event value={value || defaultValue} {style} />
{/if}
<!-- <div
		class=" scale-0 group-hover:scale-100 absolute -top-1 -right-1 -left-1 -bottom-1 group-hover:border-2 border-0 cursor-pointer border-primary-700 rounded-sm"
	></div>
</div> -->

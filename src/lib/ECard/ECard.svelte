<script lang="ts">
	import Promo from './DisplayComponent/Promo.svelte';
	import Rsvp from './DisplayComponent/RSVP.svelte';
	import Signatures from './DisplayComponent/Signatures.svelte';
	import ECardDisplay from './ECardDisplay.svelte';

	interface Props {
		style?: string;
		components?: {
			id: string;
			ecardComponentID: string;
			style?: string;
			value: string;
			default?: string;
			order: number;
		}[];
		mealTrainEnabled?: boolean;
		rsvpEnabled?: boolean;
		brandingDisabled?: boolean;
		signaturesEnabled?: boolean;
		potluckOptions?: { id: string; title: string }[];
		signatures?: { name: string; message: string }[];
		roundedCorners?: boolean;
	}

	let {
		style = '',
		components = [],
		signatures = [],
		mealTrainEnabled = false,
		rsvpEnabled = false,
		potluckOptions = [],
		brandingDisabled = false,
		signaturesEnabled = false,
		roundedCorners = false
	}: Props = $props();

	console.log('eCard', { components });
</script>

<div
	{style}
	class={`w-full ecard ${roundedCorners ? 'rounded-2xl' : ''} print:border-0 border border-solid border-gray-200 bg-custom/20 @container/ecard overflow-hidden`}
>
	{#each components.sort((a, b) => a.order - b.order) as component}
		<ECardDisplay {...component} defaultValue={component.default} />
	{/each}

	{#if rsvpEnabled}
		<Rsvp />
	{/if}

	{#if signaturesEnabled}
		<Signatures {signatures} />
	{/if}

	<!--
	{#if potluckOptions.length > 0}
		<PotluckSignUp options={potluckOptions} />
	{/if}

	{#if mealTrainEnabled}
		<MealTrainSignUp />
	{/if}

	-->

	{#if !brandingDisabled}
		<Promo />
	{/if}
</div>

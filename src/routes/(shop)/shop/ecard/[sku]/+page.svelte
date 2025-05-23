<script lang="ts">
	import { goto } from '$app/navigation';
	import Divider from '$lib/Components/Divider.svelte';
	import Loader from '$lib/Components/Loader.svelte';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import EditElements from '$lib/ECard/EditElements.svelte';
	import { eCardCartStore, type ECardCart } from '$lib/stores/eCardCheckout.js';
	import { onDestroy } from 'svelte';

	let { data } = $props();

	let isLoading = $state(false);

	let options: { [key: string]: string } = $state({});

	let eCardCheckout: ECardCart | undefined = $state();

	const unsubscribe = eCardCartStore.subscribe((c) => {
		console.log(c);
		eCardCheckout = c;
	});

	onDestroy(() => {
		unsubscribe();
	});

	$effect(() => {
		(data?.product?.components || []).forEach((comp) => {
			if (comp.key) {
				options[comp.key] = comp.default || '';
			}
		});
	});

	$inspect(data);
	$inspect(options);

	function continueToSummary(isCustom?: boolean) {
		eCardCartStore.initialize(data.product, options, isCustom);
		if (eCardCheckout?.isFlightplan) {
			goto('/flightplan/select-group');
		} else {
			goto('/shop/summary');
		}
	}
</script>

<Container className="px-4">
	<SidebarSection sectionTitle="Edit">
		{#snippet sidebarContent()}
			<div class="relative py-4 flex flex-col gap-y-3">
				<div>
					<SectionTitle title="ECard Elements" />
				</div>
				{#each (data.product.components || [])
					.filter((c) => {
						return c.editable;
					})
					.sort((a, b) => a.order - b.order) as component}
					<EditElements
						name={component.key}
						componentKey={component.ecardComponentID}
						label={component.label}
						options={component.options || []}
						defaultValue={component.default}
						bind:value={options[component.key]}
					/>
				{/each}
				<Divider />
				<div class="flex gap-2 justify-end">
					<button class="btn" onclick={() => continueToSummary(true)}>Continue</button>
				</div>
				{#if isLoading}
					<div class="absolute inset-0 flex justify-center items-center">
						<Loader />
					</div>
				{/if}
			</div>
		{/snippet}
		{#snippet content()}
			<ECard
				roundedCorners
				rsvpEnabled={data.product.includedOptions.includes('rsvpEnabled')}
				signaturesEnabled={data.product.includedOptions.includes('signaturesEnabled')}
				signatures={[{ name: 'Steve', message: 'Hello World' }]}
				components={(data.product.components || []).map((comp) => {
					return {
						id: comp.key,
						value: options[comp.key],
						ecardComponentID: comp.ecardComponentID,
						order: comp.order
					};
				})}
			/>
		{/snippet}
	</SidebarSection>
</Container>

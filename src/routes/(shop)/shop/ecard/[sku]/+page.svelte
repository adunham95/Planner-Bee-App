<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import Calender from '$lib/Calender/Calender.svelte';
	import Divider from '$lib/Components/Divider.svelte';
	import Loader from '$lib/Components/Loader.svelte';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import EditElements from '$lib/ECard/EditElements.svelte';
	import Label from '$lib/FormElements/Label.svelte';

	let { data } = $props();

	let isLoading = $state(false);

	let options: { [key: string]: string } = $state({});

	$effect(() => {
		(data?.product?.components || []).forEach((comp) => {
			if (comp.key) {
				options[comp.key] = comp.default || '';
			}
		});
	});

	$inspect(data);
	$inspect(options);

	async function saveECard() {
		isLoading = true;
		const cardOptions = Object.keys(options).map((key) => {
			return { key, value: options[key] };
		});
		console.log(cardOptions);
		try {
			const res = await fetch(`${PUBLIC_API_URL}/ecards`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					senderEmail: '1@2.com',
					eCardTemplateSku: data.product.sku,
					options: cardOptions
				})
			});
			if (res.ok) {
				const data = await res.json();
				console.log(data);
				isLoading = false;
			}
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
			isLoading = false;
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
				<!-- <Divider />
				<SectionTitle title="Delivery Date" />
				<div class="px-2">
					<Calender />
				</div> -->
				<Divider />
				<button class="btn" onclick={saveECard}>Send ECard</button>
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

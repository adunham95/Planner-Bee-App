<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import Divider from '$lib/Components/Divider.svelte';
	import Loader from '$lib/Components/Loader.svelte';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import EditElements from '$lib/ECard/EditElements.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import { toastStore } from '$lib/stores/toast.js';

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
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					senderEmail: '1@2.com',
					eCardTemplateSku: data.product.sku,
					options: cardOptions
				})
			});
			const responseData = await res.json();
			if (res.ok) {
				console.log(responseData);
				isLoading = false;
				toastStore.show({ message: 'Card Created', type: 'success' });
			} else {
				console.log(responseData);
				toastStore.show({
					message: 'There was an error',
					type: 'error',
					details: responseData.message
				});
				isLoading = false;
			}
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
			isLoading = false;
			toastStore.show({ message: 'There was an error', type: 'error' });
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
				<SectionTitle title="Sender" />
				<TextInput id="senderName" label="Sender Name" value={data.profile.name} />
				<TextInput
					id="email"
					label="Sender Email"
					subLabel="Helps us assign this to your account if you create one"
					value={data.profile.email}
				/>
				<Divider />
				<div class="flex gap-2">
					<button class="btn btn-outline" onclick={saveECard}>Send without Customization</button>
					<button class="btn" onclick={saveECard}>Send ECard</button>
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

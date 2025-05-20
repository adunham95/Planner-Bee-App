<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import ECardComponentEdit from '$lib/Form/ECardComponentEdit.svelte';
	import EditECardTemplate from '$lib/Form/EditECardTemplate.svelte';
	import ECardBox from '$lib/ShopSections/ECardBox.svelte';
	import { toastStore } from '$lib/stores/toast.js';

	const { data } = $props();

	$inspect(data);

	const intialComponents = data.components.map((comp: { [key: string]: any }) => {
		return {
			id: comp.id,
			value: {
				key: comp.key,
				label: comp.label,
				editable: comp.editable,
				ecardComponentID: comp.ecardComponentID,
				style: comp.style,
				default: comp.default,
				order: comp.order
			}
		};
	});

	let template = $state({
		eCardID: data.eCard.id,
		imageURL: data.eCard.imageURL,
		name: data.eCard.name,
		visible: data.eCard.visible,
		premium: false,
		sku: data.eCard.sku,
		description: data.eCard.description,
		cost: data.eCard.cost,
		stripeProductID: data.eCard.stripeProductID,
		stripePriceID: data.eCard.stripePriceID
	});

	interface ComponentType {
		id: string;
		value: {
			key: string;
			editable: boolean;
			ecardComponentID: string;
			style: string;
			default: string;
			order: number;
		};
	}

	let components = $state<ComponentType[]>(intialComponents);

	let componentList = $derived.by(() => {
		return components.map((c) => {
			return {
				id: c.id,
				ecardComponentID: c.value.ecardComponentID,
				style: c.value.style,
				value: c.value.default,
				default: c.value.default,
				order: c.value.order
			};
		});
	});

	async function saveECardTemplate() {
		console.log('Save Template');

		const url = `${PUBLIC_API_URL}/ecard-templates/${template.eCardID}`;

		try {
			const res = await fetch(url, {
				method: 'PATCH',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					sku: template.sku,
					name: template.name,
					description: template.description,
					cost: template.cost,
					imageURL: template.imageURL,
					visible: template.visible,
					stripeProductID: template.stripeProductID,
					stripePriceID: template.stripePriceID
				})
			});
			const responseData = await res.json();
			console.log({ responseData });
			if (responseData.id) {
				template.eCardID = responseData.id;
				toastStore.show({ type: 'success', message: 'ECard Created successfully' });
			}
		} catch (error) {
			toastStore.show({ type: 'error', message: 'Something went wrong' });
		}
	}
</script>

<Container className="pt-3 pb-6 px-5">
	<SidebarSection sectionTitle="Details" stickyContent>
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="Details" />
			</div>
			<EditECardTemplate onSave={saveECardTemplate} bind:data={template} />
		{/snippet}
		{#snippet content()}
			<div>
				<SectionTitle title="Details Preview" />
			</div>
			<div class="grid grid-cols-4">
				<ECardBox
					template={{
						...template,
						createdAt: new Date(),
						updatedAt: new Date(),
						id: '000',
						includedOptions: [],
						components: []
					}}
				/>
			</div>
		{/snippet}
	</SidebarSection>
	<SidebarSection sectionTitle="ECard Elements" className="pt-4" stickyContent>
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="ECard Elements" />
			</div>
			<ECardComponentEdit eCardID={template.eCardID} bind:components />
		{/snippet}
		{#snippet content()}
			<div>
				<SectionTitle title="ECard Preview" />
			</div>
			<ECard roundedCorners components={componentList} />
		{/snippet}
	</SidebarSection>
</Container>

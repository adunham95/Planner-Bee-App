<script>
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import Title from '$lib/ECard/DisplayComponent/Title.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import ECardComponentEdit from '$lib/Form/ECardComponentEdit.svelte';
	import EditECardTemplate from '$lib/Form/EditECardTemplate.svelte';
	import ECardBox from '$lib/ShopSections/ECardBox.svelte';

	let template = $state({
		imageURL: '',
		name: 'Placeholder',
		visible: true,
		premium: false,
		sku: 'AAAA',
		description: 'Placeholder',
		cost: 0
	});

	let components = $state([
		{
			id: '1',
			value: { editable: false, ecardComponentID: '', style: '', default: '', order: 0 }
		}
	]);

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

	$inspect(componentList);

	// let componentTypes = [];

	function saveECardTemplate() {
		console.log('Save Template');
	}
</script>

<Container className="pt-3 pb-6 px-5">
	<SidebarSection sectionTitle="Details">
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="Details" />
			</div>
			<EditECardTemplate onSave={saveECardTemplate} data={template} />
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
	<SidebarSection sectionTitle="ECard Elements" className="pt-4">
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="ECard Elements" />
			</div>
			<ECardComponentEdit bind:components />
		{/snippet}
		{#snippet content()}
			<div>
				<SectionTitle title="ECard Preview" />
			</div>
			<ECard roundedCorners components={componentList} />
		{/snippet}
	</SidebarSection>
</Container>

<!-- <EditECardTemplate onSave={saveECardTemplate} /> -->

<script>
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import Title from '$lib/ECard/DisplayComponent/Title.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import EditECardTemplate from '$lib/Form/EditECardTemplate.svelte';
	import ECardBox from '$lib/ShopSections/ECardBox.svelte';

	let template = $state({
		imageURL: '',
		name: 'Placeholder',
		visible: true,
		premium: false,
		sku: 'AAA',
		description: 'Placeholder'
	});

	function saveECardTemplate() {
		console.log('Save Template');
	}
</script>

<Container className="pt-3 pb-6">
	<SidebarSection sectionTitle="Details">
		{#snippet sidebarContent()}
			<div>
				<SectionTitle title="Details" />
			</div>
			<EditECardTemplate onSave={saveECardTemplate} data={template} />
		{/snippet}
		{#snippet content()}
			<div class="grid grid-cols-4">
				<ECardBox
					template={{
						...template,
						createdAt: new Date(),
						updatedAt: new Date(),
						id: '000',
						cost: 0,
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
			<EditECardTemplate onSave={saveECardTemplate} />
		{/snippet}
		{#snippet content()}
			<ECard roundedCorners components={[]} />
		{/snippet}
	</SidebarSection>
</Container>

<!-- <EditECardTemplate onSave={saveECardTemplate} /> -->

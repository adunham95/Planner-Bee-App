<script>
	import Divider from '$lib/Components/Divider.svelte';
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import Container from '$lib/Container.svelte';
	import HalfSidebarSection from '$lib/Display/HalfSidebarSection.svelte';
	import CheckCards from '$lib/FormElements/CheckCards.svelte';
	import Label from '$lib/FormElements/Label.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import SmallFeatureLIst from '$lib/ShopSections/SmallFeatureLIst.svelte';
</script>

<Container className="px-4">
	<HalfSidebarSection sectionTitle="Party Box" stickyContent>
		{#snippet sidebarContent()}
			<div class="pt-4">
				<SectionTitle title="Generic Party Box" />
			</div>
			<div class="flex items-center pb-2">
				<p class="text-lg text-gray-900 sm:text-xl">$45</p>
			</div>
			<p class="text-base text-gray-500">The basic party starter kit</p>

			<Divider />

			<SectionTitle title="Supplies" />
			<SmallFeatureLIst
				features={[
					{ title: '10 Plates' },
					{ title: '10 Cups' },
					{ title: '20 Napkins' },
					{ title: '2 Table Covers' },
					{ title: '1 Present Table Cover' },
					{ title: '1 Happy Birthday Ribbon' },
					{ title: '2 Center Pieces' }
				]}
			/>

			<Divider />

			<div>
				<Label
					id=""
					label="Select Table Type"
					subLabel="This will be used for the main table covers"
				/>
				<CheckCards
					value=""
					options={[
						{ id: 'rectangle', label: 'Rectangle' },
						{ id: 'round', label: 'Round' },
						{ id: 'oval', label: 'Oval' },
						{ id: 'square', label: 'Square' }
					]}
				/>
				<Label
					id=""
					label="Select Preset Table Type"
					subLabel="This will be used for the main table covers"
				/>
				<CheckCards
					value=""
					options={[
						{ id: 'rectangle', label: 'Rectangle' },
						{ id: 'round', label: 'Round' },
						{ id: 'oval', label: 'Oval' },
						{ id: 'square', label: 'Square' }
					]}
				/>
			</div>

			<div class="mt-4">
				<TextInput
					id="customize"
					label="Customize"
					subLabel="This will be used for any elements of your party that can be customized"
				/>
			</div>
			<div class="mt-4">
				<button class="btn w-full">Continue</button>
			</div>
		{/snippet}
		{#snippet content()}
			<img
				alt="box a yellow background"
				src="/images/pexels-ron-lach-9594423.jpg"
				class="aspect-square w-full rounded-lg object-cover"
			/>
		{/snippet}
	</HalfSidebarSection>
</Container>

{#snippet circle()}
	<svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 500 500">
		<circle cx="250" cy="250" r="210" fill="#fff" stroke="#000" stroke-width="8" />
	</svg>
{/snippet}

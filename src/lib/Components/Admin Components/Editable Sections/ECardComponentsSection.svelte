<script lang="ts">
	import SectionTitle from '$lib/Components/SectionTitle.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';
	import ECard from '$lib/ECard/ECard.svelte';
	import ECardComponentEdit from '$lib/Form/ECardComponentEdit.svelte';
	import type { ECardComponent } from '../../../../app';

	interface Props {
		partyBoxTemplateID?: string | null;
		eCardID?: string | null;
		eCardComponents: ECardComponent[];
	}

	const { partyBoxTemplateID, eCardID, eCardComponents }: Props = $props();

	const intialComponents = (eCardComponents || []).map((comp: { [key: string]: any }) => {
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
</script>

<SidebarSection sectionTitle="ECard Elements" className="pt-4" stickyContent>
	{#snippet sidebarContent()}
		<div>
			<SectionTitle title="ECard Elements" />
		</div>
		<ECardComponentEdit {partyBoxTemplateID} {eCardID} bind:components />
	{/snippet}
	{#snippet content()}
		<div>
			<SectionTitle title="ECard Preview" />
		</div>
		<ECard roundedCorners components={componentList} />
	{/snippet}
</SidebarSection>

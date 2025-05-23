<script lang="ts">
	import type { Step } from '$lib/Components/ProgressSteps.svelte';
	import ProgressSteps from '$lib/Components/ProgressSteps.svelte';
	import Container from '$lib/Container.svelte';
	import SidebarSection from '$lib/Display/SidebarSection.svelte';

	const steps: Step[] = [
		{
			href: '/shop/ecard?saveOrder=false',
			title: 'Select ECard',
			status: 'completed'
		},
		// {
		// 	href: '/flightplan/select-group',
		// 	title: 'Select Group',
		// 	status: 'inProgress'
		// },

		{
			href: '/flightplan/summary',
			title: 'Summary',
			status: 'inProgress'
		},

		{
			href: '/flightplan/start-subscription',
			title: 'Start Subscription'
		}
	];
</script>

<Container className="px-4">
	<ProgressSteps {steps} />
	<SidebarSection sectionTitle="Edit"></SidebarSection>
</Container>

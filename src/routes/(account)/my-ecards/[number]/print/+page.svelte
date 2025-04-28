<script>
	import { browser } from '$app/environment';
	import ECard from '$lib/ECard/ECard.svelte';
	import { onMount } from 'svelte';

	const components = [
		{
			id: '1',
			value: "You're Invited to a Birthday Bash! 🎉",
			ecardComponentID: 'title',
			order: 1
		},
		{ id: '2', value: '', ecardComponentID: 'event', order: 5 },
		{
			id: '3',
			value: '/images/pexels-tirachard-kumtanom-112571-574282.jpg',
			ecardComponentID: 'banner',
			order: 0
		},
		{
			id: '3',
			value:
				"Come celebrate with us! Join the party, enjoy some cake, and help make this birthday unforgettable. We can't wait to see you there!",
			ecardComponentID: 'message',
			order: 2
		}
	];

	onMount(() => {
		if (browser) {
			window.print();
		}
	});
</script>

<div
	class="w-screen h-screen grid grid-cols-2 gap-2 print:flex print:flex-row print:w-screen print:h-screen print:text"
>
	<div class="w-1/2 h-full">
		<ECard {components} />
	</div>
	<div class="w-1/2 h-full">
		<ECard {components} />
	</div>
</div>

<style>
	@media print {
		@page {
			size: landscape;
			margin: 0;
		}
		body,
		html {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			font-size: 0.8rem;
		}
		.print-page {
			page-break-inside: avoid;
			break-inside: avoid;
			page-break-before: auto;
			page-break-after: auto;
		}
	}
</style>

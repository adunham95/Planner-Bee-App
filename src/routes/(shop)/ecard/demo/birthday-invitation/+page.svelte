<script>
	import ECard from '$lib/ECard/ECard.svelte';

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
</script>

<ECard rsvpEnabled={true} signaturesEnabled={false} {components} />

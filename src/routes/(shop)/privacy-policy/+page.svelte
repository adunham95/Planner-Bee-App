<script lang="ts">
	import Container from '$lib/Container.svelte';
	import PrivacyPolicyMarkdown from '$lib/data/pages/md/privacy-policy.md?raw';
	import SvelteMarkdown from 'svelte-markdown';
</script>

<Container className="markdown pt-5 pb-2 px-6 lg:px-8 max-w-3xl! text-base/7 text-gray-700">
	<SvelteMarkdown source={PrivacyPolicyMarkdown} />
</Container>

<script lang="ts">
	import LargeFooter from '$lib/Footers/LargeFooter.svelte';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<Header />

{@render children()}

<LargeFooter />

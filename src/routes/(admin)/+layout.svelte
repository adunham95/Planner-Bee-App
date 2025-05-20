<script>
	import AdminHeader from '$lib/Header/AdminHeader.svelte';
	let { children } = $props();
</script>

<AdminHeader
	routes={[
		{ title: 'Home', path: '/' },
		{ title: 'Current Templates', path: '/admin' },
		{ title: 'New ECard Template', path: '/admin/ecardtemplate/new' }
	]}
/>

<main>
	{@render children()}
</main>

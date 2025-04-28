<script>
	import AdminHeader from '$lib/Header/AdminHeader.svelte';

	let { children } = $props();
</script>

<AdminHeader
	appTitle="Planner Bee"
	routes={[
		{ title: 'Store', path: '/shop/ecard' },
		{ title: 'My ECards', path: '/my-ecards' }
	]}
	profileRoutes={[{ title: 'Account', path: '/account' }]}
/>

{@render children()}

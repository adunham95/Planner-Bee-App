<script>
	import AdminHeader from '$lib/Header/AdminHeader.svelte';

	let { children, data } = $props();
	console.log({ data });
</script>

<AdminHeader
	appTitle="Planner Bee"
	routes={[
		{ title: 'Store', path: '/shop/ecard' },
		{ title: 'My ECards', path: '/my-ecards' }
	]}
	profileRoutes={[
		{ title: 'Account', path: '/account' },
		{ title: 'Logout', path: '/logout' }
	]}
/>

{@render children()}

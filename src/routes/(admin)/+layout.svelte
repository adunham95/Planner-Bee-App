<script>
	import AdminHeader from '$lib/Header/AdminHeader.svelte';
	let { children } = $props();
</script>

<AdminHeader
	routes={[
		{ title: 'Home', path: '/' },
		{ title: 'Current Templates', path: '/admin' },
		{ title: 'New Product', path: '/admin/products/new' },
		{ title: 'Stock', path: '/admin/stock' },
		{ title: 'Orders', path: '/admin/orders' }
	]}
/>

<main>
	{@render children()}
</main>

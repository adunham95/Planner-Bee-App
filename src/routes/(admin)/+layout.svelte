<script>
	import AdminHeader from '$lib/Header/AdminHeader.svelte';
	let { children } = $props();
</script>

<AdminHeader routes={[{ title: 'New ECard Template', path: '/admin/ecardtemplate/new' }]} />

<main>
	{@render children()}
</main>

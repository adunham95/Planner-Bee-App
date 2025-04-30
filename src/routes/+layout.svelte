<script>
	import Toasts from '$lib/Components/Toasts.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Toasts />
{@render children()}

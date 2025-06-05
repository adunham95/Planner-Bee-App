<script>
	import Drawer from '$lib/Components/Overlay/Drawer.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
</script>

<Drawer id="stock" isOpen onClose={() => null}>
	<TextInput id="title" label="Title" />
</Drawer>

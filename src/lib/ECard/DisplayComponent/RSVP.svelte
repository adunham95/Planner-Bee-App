<script>
	import TextArea from '$lib/FormElements/TextArea.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import Toggle from '$lib/FormElements/Toggle.svelte';
</script>

<div class="p-6">
	<form class="max-w-xl mx-auto grid grid-cols-2 gap-2">
		<TextInput id="name" label="Name" />
		<Toggle
			id="going"
			label="Going"
			className="py-2 w-auto "
			checkItemClassName="has-[:checked]:bg-custom/25"
			checked
		/>
		<button class="btn btn-large w-full btn-custom col-span-2">RSVP</button>
	</form>
</div>

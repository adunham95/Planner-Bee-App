<script lang="ts">
	interface Props {
		value: string;
	}

	const { value }: Props = $props();

	$effect(() => {
		document.body.style.setProperty('--color-custom', value);
	});
</script>

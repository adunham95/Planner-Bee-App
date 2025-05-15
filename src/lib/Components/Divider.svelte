<script lang="ts">
	interface Props {
		className?: string;
	}

	const { className }: Props = $props();
</script>

<hr class={`border-t border-gray-200 my-5 ${className}`} />

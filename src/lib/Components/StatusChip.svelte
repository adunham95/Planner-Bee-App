<script lang="ts">
	interface Props {
		status: string;
	}

	const { status }: Props = $props();
</script>

{#if status === 'draft'}
	<span
		class="inline-flex items-center rounded-md bg-info-100 px-2 py-1 text-xs font-medium text-info-600"
	>
		Draft
	</span>
{:else if status === 'canceled'}
	<span
		class="inline-flex items-center rounded-md bg-error-100 px-2 py-1 text-xs font-medium text-error-600"
	>
		Canceled
	</span>
{:else}
	<span
		class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
	>
		{status}
	</span>
{/if}

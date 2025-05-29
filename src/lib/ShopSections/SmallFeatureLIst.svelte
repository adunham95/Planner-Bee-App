<script lang="ts">
	interface Props {
		features: { title: string; description?: string }[];
	}

	const { features }: Props = $props();
</script>

<dl class="mt-2 max-w-xl text-base/7 text-gray-600 lg:max-w-none">
	{#each features as feature}
		<div>
			<dt class="inline font-semibold text-gray-900">{feature.title}</dt>
			{#if feature.description}
				<dd class="inline">
					{feature.description}
				</dd>
			{/if}
		</div>
	{/each}
</dl>

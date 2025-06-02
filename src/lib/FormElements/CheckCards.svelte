<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		groupName: string;
		options: { id: string; label: string; subLabel?: string; snippet?: Snippet }[];
		value: string;
	}

	let { value = $bindable(), options, groupName }: Props = $props();
</script>

<div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
	{#each options as option}
		<label
			class="relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-hidden group has-checked:ring-2 has-checked:ring-primary-500"
		>
			<input
				type="radio"
				name={groupName}
				value={option.id}
				class="sr-only"
				onchange={() => (value = option.id)}
			/>
			<div>
				<p class="text-base font-medium text-gray-900">{option.label}</p>
				{#if option.subLabel}
					<p class="mt-1 text-sm text-gray-500">{option.subLabel}</p>
				{/if}
				{#if option.snippet}
					{@render option?.snippet()}
				{/if}
			</div>

			<div
				class="pointer-events-none absolute -inset-px rounded-lg border group-[has-checked]:border-2 group-[has-checked]:border-primary-500 border-transparent"
				aria-hidden="true"
			></div>
		</label>
	{/each}
</div>

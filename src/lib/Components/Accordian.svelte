<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		actions?: Snippet;
		children: Snippet;
		childrenWrapperClassName?: string;
		className?: string;
	}

	const {
		children,
		title,
		actions,
		childrenWrapperClassName = '',
		className = ''
	}: Props = $props();
</script>

<details class={`[&_svg]:open:-rotate-180 w-full ${className}`}>
	<summary
		class="flex justify-between cursor-pointer list-none items-center gap-4 btn btn-text w-full"
	>
		<div class="flex justify-start items-center">
			<svg
				class="rotate-0 transform transition-all duration-300"
				fill="none"
				height="20"
				width="20"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
			>
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
			<div class="ml-1">{title}</div>
		</div>

		{@render actions?.()}
	</summary>
	<div class={`p-2 ${childrenWrapperClassName}`}>
		{@render children()}
	</div>
</details>

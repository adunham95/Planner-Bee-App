<script lang="ts">
	import type { Snippet } from 'svelte';

	type Sizes = 'small' | 'medium' | 'large';

	interface Props {
		className?: string;
		children: Snippet;
		size?: Sizes;
	}

	const { children, className = '', size = 'large' }: Props = $props();

	const classSizes: { [key: string]: string } = {
		small: 'max-w-2xl',
		medium: 'max-w-4xl',
		large: 'max-w-6xl'
	};
</script>

<div class={`${className} mx-auto ${classSizes[size]}`}>
	{@render children()}
</div>

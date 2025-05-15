<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		sectionTitle: string;
		content?: Snippet;
		sidebarContent?: Snippet;
		className?: string;
		stickyContent?: boolean;
		stickySidebar?: boolean;
	}

	const {
		sectionTitle,
		content,
		sidebarContent,
		className = '',
		stickySidebar = false,
		stickyContent = false
	}: Props = $props();
</script>

<div class={`md:grid md:auto-rows-min md:grid-cols-12 md:gap-x-8 relative ${className}`}>
	<div class="mt-8 md:col-span-6 lg:col-span-8 md:col-start-1">
		<h2 class="sr-only">{sectionTitle}</h2>
		<div class={`${stickyContent ? 'sticky top-[50px]' : ''} `}>
			{@render content?.()}
		</div>
	</div>
	<div class="md:col-span-6 lg:col-span-4">
		<div class={`${stickySidebar ? 'sticky top-[50px]' : ''}`}>
			{@render sidebarContent?.()}
		</div>
	</div>
</div>

<script lang="ts">
	import type { RoadmapItem } from '$lib/data/roadMapItems';
	import RoadMapItem from './RoadMapItem.svelte';

	interface Props {
		items: RoadmapItem[];
	}

	let { items }: Props = $props();

	let sortedItems = $derived.by(() => {
		return [...items].sort((a, b) => {
			const versionA = a.version.split('.').map(Number);
			const versionB = b.version.split('.').map(Number);

			for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
				const numA = versionA[i] || 0;
				const numB = versionB[i] || 0;
				if (numA !== numB) {
					return numA - numB;
				}
			}
			return 0;
		});
	});
</script>

<div class="py-8 animate-fade-in px-2">
	<div class="space-y-12">
		{#each sortedItems as item, index}
			<RoadMapItem {item} {index} />
		{/each}
	</div>
</div>

<script lang="ts">
	import type { ECardTemplate } from '../../app';
	import ECardBox from './ECardBox.svelte';

	interface Props {
		products: ECardTemplate[];
	}

	const { products }: Props = $props();

	// const visibleProducts = products.slice(0,4)
	const visibleProducts = products;
</script>

<div class="relative mt-8">
	<div class="relative -mb-6 w-full overflow-x-auto pb-6">
		<ul
			role="list"
			class="mx-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:mx-6 lg:mx-0 grid lg:space-x-0 gap-4"
		>
			{#each visibleProducts as prod}
				<li class="pb-4">
					<ECardBox template={prod} href={`/shop/ecard/${prod.sku}`} />
				</li>
			{/each}
		</ul>
	</div>
</div>

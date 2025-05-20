<script lang="ts">
	interface Props {
		imgURL?: string;
		headline: string;
		description?: string;
		cta: string;
	}

	const { imgURL, headline, description, cta }: Props = $props();
</script>

<div class="relative overflow-hidden bg-white">
	<!-- Decorative background image and gradient -->
	<div aria-hidden="true" class="absolute inset-0">
		{#if imgURL}
			<div class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
				<img src={imgURL} alt="" class="size-full object-cover rounded-lg" />
			</div>
		{/if}
		<div class="absolute inset-0 bg-white/75"></div>
		<!-- <div class="absolute inset-0 bg-linear-to-t from-white via-white"></div> -->
	</div>

	<!-- Callout -->
	<section
		aria-labelledby="sale-heading"
		class="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8"
	>
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<h2
				id="sale-heading"
				class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
			>
				{headline}
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">{description}</p>
			<a
				href="/beehive"
				class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
				>{cta}</a
			>
		</div>
	</section>
</div>

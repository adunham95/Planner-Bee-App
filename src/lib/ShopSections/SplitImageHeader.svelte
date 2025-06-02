<script lang="ts">
	interface Props {
		headline: string;
		description: string;
		imageURL: string;
	}

	const { headline, description, imageURL }: Props = $props();
</script>

<div class="bg-white">
	<div class="relative">
		<div aria-hidden="true" class="absolute hidden h-full w-1/2 bg-gray-100 md:block"></div>
		<div class="relative bg-gray-100 md:bg-transparent">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 md:grid md:grid-cols-2 md:px-8">
				<div class="mx-auto max-w-2xl py-24 md:max-w-none md:py-64">
					<div class="md:pr-16">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
							{headline}
						</h1>
						<p class="mt-4 text-xl text-gray-600">{description}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="h-64 w-full sm:h-64 md:absolute md:top-0 md:right-0 md:h-full md:w-1/2">
			<img src={imageURL} alt="" class="size-full object-cover" />
		</div>
	</div>
</div>

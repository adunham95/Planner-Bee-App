<script>
	import Container from '$lib/Container.svelte';
</script>

<Container>
	<div class=" px-6 lg:px-8 py-24 sm:py-32">
		<h2 class="text-center text-base/7 font-semibold text-indigo-600">Party smarter</h2>
		<p
			class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl"
		>
			Everything you need to host the perfect party
		</p>
	</div>

	<div class="mx-auto max-w-2xl px-6 lg:max-w-5xl lg:px-8">
		<div
			class="shadow-sm ring-1 ring-black/5 bg-white relative flex h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)]"
		>
			<div class="flex-1/4">
				<img class=" aspect-square" src="/images/placeholderBox.png" alt="" />
			</div>
			<div class="flex flex-col w-full justify-center py-3 px-4">
				<p class="mt-2 text-2xl font-semibold tracking-tight text-gray-950 max-lg:text-center">
					Easy Planning
				</p>
				<p class="mt-2 max-w-lg text-xl text-gray-600 max-lg:text-center">
					Throw parties without stress. Everything you need, from tableware to themed decor. Arrives
					in one curated box.
				</p>
			</div>
		</div>
	</div>

	<dl
		class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		<div>
			<dt class="font-semibold text-gray-900">Time Saver</dt>
			<dd class="mt-1 text-gray-600">
				No need to run to five stores. Save time with a beautifully coordinated party setup
				delivered to your door.
			</dd>
		</div>
		<div>
			<dt class="font-semibold text-gray-900">Tailored Themes</dt>
			<dd class="mt-1 text-gray-600">
				Choose from kid birthdays, elegant soirées, or seasonal celebrations. Every box is
				handpicked for your occasion.
			</dd>
		</div>
		<div>
			<dt class="font-semibold text-gray-900">Reliable & Reusable</dt>
			<dd class="mt-1 text-gray-600">
				Quality supplies you can count on—many items are reusable, recyclable, or compostable. Party
				responsibly.
			</dd>
		</div>
	</dl>
</Container>

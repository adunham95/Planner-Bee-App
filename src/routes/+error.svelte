<script>
	import { page } from '$app/state';
</script>

<main class="relative isolate min-h-full">
	<img
		src="/images/flower-field.png"
		alt=""
		class="absolute inset-0 -z-10 size-full object-cover object-top"
	/>
	<div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
		<p class="text-base/8 font-semibold text-white">{page.status}</p>
		<h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
			{page.error?.message}
		</h1>
		<div class="flex justify-center">
			<img src="/images/lost-bee.png" alt="" class="w-[200px]" />
		</div>
		<div class="mt-10 flex justify-center">
			<a href="/" class="text-sm/7 font-semibold text-white">
				<span aria-hidden="true">&larr;</span> Back to home
			</a>
		</div>
	</div>
</main>

<style>
	:global(body) {
		height: 100%;
	}
	:global(html) {
		height: 100%;
	}
</style>

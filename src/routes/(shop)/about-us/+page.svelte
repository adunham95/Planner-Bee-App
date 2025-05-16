<script lang="ts">
	import Container from '$lib/Container.svelte';
	import AboutUsMarkdown from '$lib/data/pages/md/about.md?raw';
	import SvelteMarkdown from 'svelte-markdown';
</script>

<Container className="markdown pt-5 pb-2 px-6 lg:px-8 max-w-3xl! text-base/7 text-gray-700">
	<h1 class="mb-6">About Us</h1>

	<SvelteMarkdown source={AboutUsMarkdown} />

	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
			Mission Statement
		</h2>
		<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
			At Planner Bee, we're on a mission to make celebrating life’s moments simple, joyful, and
			beautifully organized. Whether you're planning a birthday party, a baby shower, or a surprise
			celebration, we’re here to help you keep every detail buzzing in harmony — from invitations to
			RSVPs and everything in between.
		</p>
	</div>
</Container>

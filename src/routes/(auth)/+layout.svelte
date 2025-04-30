<script lang="ts">
	const { children } = $props();
</script>

<div
	class="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-pink-400 bg-center bg-cover"
	style="background-image: url('/images/pexels-pixabay-434337.jpg');"
>
	<div class="sm:mx-auto sm:w-full sm:max-w-[480px] p-4">
		<div class="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
			{@render children()}
		</div>
	</div>
</div>

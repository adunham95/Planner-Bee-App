<script lang="ts">
	interface Props {
		title: string;
		subTitle?: string;
	}

	const { title, subTitle }: Props = $props();
</script>

<div class="px-4 py-16 text-center sm:px-6 lg:px-8">
	<h1 class="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
	<p class="mx-auto mt-4 max-w-xl text-base text-gray-500">
		{subTitle}
	</p>
</div>

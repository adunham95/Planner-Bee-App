<script lang="ts">
	interface Props {
		title?: string;
		style?: string;
	}

	let { title = '', style = '' }: Props = $props();
</script>

<h2
	{style}
	class="text-3xl font-bold text-custom/95 @screen-sm/ecard:text-[3.5rem] @screen-md/ecard:text-[4.5rem] @screen-lg/ecard:text-[6rem] @screen-ulra/ecard:text-[10rem] @sm/ecard:tracking-tight text-center py-4 px-2 print:py-2 @sm:leading-none"
>
	{title}
</h2>

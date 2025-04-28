<script lang="ts">
	interface Props {
		value: string;
		style?: string;
	}

	let { value, style = '' }: Props = $props();
</script>

<p
	{style}
	class="mt-1 text-xl @screen-sm/ecard:text-[1.75rem] @screen-md/ecard:text-[2.5rem] @screen-lg/ecard:text-[3rem] @screen-ulra/ecard:text-[4rem] @screen-sm/ecard:text-center text-custom/80 px-4 py-3 print:py-1.5 mx-auto max-w-xl whitespace-pre-line"
>
	{value}
</p>

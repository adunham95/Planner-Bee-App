<script lang="ts">
	import { browser } from '$app/environment';

	interface Props {
		value?: string;
		style?: string;
	}

	let { value = '', style = '' }: Props = $props();
</script>

<div class="flex">
	<div
		class="mt-1 text-xl @screen-sm/ecard:text-[1.75rem] @screen-md/ecard:text-[2.5rem] @screen-lg/ecard:text-[3rem] @screen-ulra/ecard:text-[4rem] @screen-sm/ecard:text-center text-custom/80 px-4 py-3 print:p-1.5 mx-auto max-w-xl whitespace-pre-line text-center"
	>
		<time datetime="2025-05-30 16:30">Saturday, May 30th, 2025 4:30 - 6:30 PM</time>
		<p>Smart Toys and Books</p>
		<p>123 Street</p>
		<p>Knoxville, TN, 37932</p>
		<div class="pb-4"></div>
		<button class="btn btn-custom print:hidden">Add To My Calender</button>
	</div>
	{#if browser}
		<img src={`${window.location.href}/qr`} alt="QR COde" />
	{/if}
</div>

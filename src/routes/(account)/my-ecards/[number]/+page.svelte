<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import Accordian from '$lib/Components/Accordian.svelte';
	import Drawer from '$lib/Components/Overlay/Drawer.svelte';
	import Modal from '$lib/Components/Overlay/Modal.svelte';
	import StartingPointList from '$lib/Components/StartingPointList.svelte';
	import StatusChip from '$lib/Components/StatusChip.svelte';
	import Container from '$lib/Container.svelte';
	import EditElements from '$lib/ECard/EditElements.svelte';
	import { toastStore } from '$lib/stores/toast.js';
	import { copyToClipboard } from '$lib/util/copyToClipboard.js';

	const eCardID = 'ECARD-M9XEDZ2D-0MX1';

	const { data } = $props();

	const editableComponents = $derived.by(() => {
		return data.eCard.options.filter((o) => o.eCardComponent);
	});

	console.log({ data, editableComponents });

	let isOpen = $state(false);
	let showModal = $state(false);

	async function saveOption(id: string) {
		const component = editableComponents.find((c) => c.id === id);
		if (component) {
			const value = component.value;
			console.log(value);

			try {
				const res = await fetch(`${PUBLIC_API_URL}/option-items/${id}`, {
					method: 'PATCH',
					credentials: 'include', // this is critical
					headers: {
						'Content-Type': 'application/json' // Set content type to JSON
					},
					body: JSON.stringify({
						value
					})
				});
				const responseData = await res.json();
				if (res.ok) {
					console.log(responseData);
					toastStore.show({ message: 'Option Updated', type: 'success' });
				} else {
					console.log(responseData);
					toastStore.show({
						message: 'There was an error',
						type: 'error',
						details: responseData.message
					});
				}
			} catch (error) {
				console.error('There was a problem with the fetch operation:', error);
				toastStore.show({ message: 'There was an error', type: 'error' });
			}
		}
	}

	async function cancelCard() {
		try {
			const res = await fetch(`${PUBLIC_API_URL}/ecards/${data.eCard.id}`, {
				method: 'PATCH',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					status: 'canceled'
				})
			});
			const responseData = await res.json();
			if (res.ok) {
				console.log(responseData);
				toastStore.show({ message: 'Card Canceled', type: 'success' });
			} else {
				console.log(responseData);
				toastStore.show({
					message: 'There was an error',
					type: 'error',
					details: responseData.message
				});
			}
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
			toastStore.show({ message: 'There was an error', type: 'error' });
		}
	}
</script>

<Drawer id="user" bind:isOpen title="Edit" onClose={() => (isOpen = false)}>
	{#each editableComponents as comp}
		{console.log(comp)}
		{#if comp.eCardComponent.editable}
			<Accordian title={comp.eCardComponent.label} className={'mb-2'}>
				<EditElements
					componentKey={comp.eCardComponent.ecardComponentID}
					label={comp.eCardComponent.label}
					bind:value={comp.value}
				/>
				<div class="flex justify-end">
					<button onclick={() => saveOption(comp.id)}>Save</button>
				</div>
			</Accordian>
		{/if}
	{/each}
</Drawer>

<Modal bind:showModal className="w-[500px]">
	<h1>Modal</h1>
</Modal>

<Container>
	<main class="py-4 px-2 sm:px-2 lg:px-8">
		<h1 class="text-3xl font-bold tracking-tight text-gray-900">ECard Details</h1>

		<div class="mt-2 border-b border-gray-200 pb-5 text-sm sm:flex sm:justify-between">
			<dl class="flex">
				<dt class="text-gray-500">ECard number:&nbsp;</dt>
				<dd class="font-medium text-gray-900">{data.eCard.eCardNumber}</dd>
				<dt>
					<span class="mx-2 text-gray-400" aria-hidden="true">&middot;</span>
				</dt>
				<StatusChip status={data.eCard.status} />
				{#if data.eCard.deliveryDate}
					<dt>
						<span class="sr-only">Date</span>
						<span class="mx-2 text-gray-400" aria-hidden="true">&middot;</span>
					</dt>
					<dd class="font-medium text-gray-900">
						<time datetime="2021-03-22">March 22, 2021</time>
					</dd>
				{/if}
			</dl>
		</div>

		<StartingPointList
			listItems={[
				{
					title: 'Copy Shareable Link',
					description: 'Copy a link to share with family an friends',
					onClick: () => {
						copyToClipboard(`https://plannerbeecards.com/ecard/${data.eCard.eCardNumber}`);
						toastStore.show({ message: 'Copied to clipboard!' });
					},
					// href: ``,
					icon: share,
					bgColor: 'bg-pastel-purple'
				},
				{
					title: 'View ECard',
					description: 'View the ecard',
					href: `/ecard/${data.eCard.eCardNumber}`,
					icon: ecard,
					bgColor: 'bg-pastel-lilac'
				},
				{
					title: 'Cancel ECard',
					description: 'Cancel the ecard, and make it not able to be seen or signed',
					onClick: () => cancelCard(),
					icon: close,
					bgColor: 'bg-pastel-orange'
				},
				{
					title: 'Edit ECard',
					description: 'Edit the ecard, make text or other changes',
					onClick: () => (isOpen = true),
					icon: edit,
					bgColor: 'bg-pastel-sky'
				},
				{
					title: 'Print ECard',
					description: 'Make it not an ECard',
					// onClick: () => alert('Clicked'),
					href: `/my-ecards/${eCardID}/print`,
					icon: print,
					bgColor: 'bg-pastel-teal'
				}
				// {
				// 	title: 'View Analytics(Coming Soon)',
				// 	description: 'Track who has seen it and other details',
				// 	onClick: () => alert('Clicked'),
				// 	icon: pieChart,
				// 	bgColor: 'bg-secondary-500'
				// }
			]}
		/>
	</main>
</Container>

{#snippet iconOne()}
	<svg
		class="size-6 text-white"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
		data-slot="icon"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
		/>
	</svg>
{/snippet}

{#snippet ecard()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="64"
		height="64"
		viewBox="0 0 64 64"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<!-- Card screen -->
		<rect x="12" y="14" width="40" height="36" rx="4" ry="4" />

		<!-- Heart icon in center -->
		<path
			d="M26 30c0-2 1.6-3.5 3.5-3.5S33 28 33 30c0-2 1.6-3.5 3.5-3.5S40 28 40 30c0 3.5-7 7-7 7s-7-3.5-7-7z"
		/>

		<!-- Digital-style lines (representing text) -->
		<line x1="18" y1="22" x2="46" y2="22" />
		<line x1="18" y1="42" x2="46" y2="42" />
	</svg>
{/snippet}

{#snippet close()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		/>
	</svg>
{/snippet}

{#snippet edit()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
		/>
	</svg>
{/snippet}

{#snippet pieChart()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
		/>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
		/>
	</svg>
{/snippet}

{#snippet print()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
		/>
	</svg>
{/snippet}

{#snippet share()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
		/>
	</svg>
{/snippet}

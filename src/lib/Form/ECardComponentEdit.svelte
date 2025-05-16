<script lang="ts">
	import { eCardComponents } from '$lib/data/ecardComponents';
	import Select from '$lib/FormElements/Select.svelte';
	import TextArea from '$lib/FormElements/TextArea.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import Toggle from '$lib/FormElements/Toggle.svelte';

	const componentTypes = eCardComponents.map((comp) => {
		return {
			id: comp.id,
			label: comp.name
		};
	});

	interface Props {
		components: { id: string; value: any; action?: string }[];
	}

	let { components = $bindable([]) }: Props = $props();

	function generateID(length: number) {
		return [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
	}

	// export let value: { id: string; value: any; action?: string }[] = [
	// 	{ id: generateID(4), value: {}, action: 'add' }
	// ];

	const addItem = () => {
		components = [...components, { id: generateID(4), value: { editable: false } }];
	};

	const removeItem = (idToRemove: string) => {
		components = components.filter((e) => e.id !== idToRemove);
	};
</script>

<ul role="list" class={`mt-2 divide-y divide-gray-200`}>
	{#each components as item, idx}
		<li class={`flex items-end justify-between py-3 ${item.action === 'remove' && 'hidden'}`}>
			<details>
				<summary class="flex justify-between"
					>{item.value.label || 'Component ' + idx}
					<button
						onclick={() => removeItem(item.id)}
						type="button"
						class="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
					>
						Remove
					</button>
				</summary>

				<div class="grid grid-cols-2 w-full gap-4 pb-2">
					<TextInput
						label="Label"
						className="col-span-2"
						id={`${item.id}%%label`}
						bind:value={item.value.label}
					/>
					<TextInput
						label="Order"
						className="col-span-1"
						type="number"
						id={`${item.id}%%displayOrder`}
						bind:value={item.value.displayOrder}
					/>
					<TextInput
						label="Key"
						className="col-span-1"
						id={`${item.id}%%key`}
						bind:value={item.value.key}
					/>
					<Select
						id={`${item.id}%%componentID`}
						label="Component"
						className="col-span-1"
						bind:value={item.value.ecardComponentID}
						options={componentTypes}
					/>
					<Toggle
						bind:checked={item.value.editable}
						className="flex items-end w-full pl-2 pb-2"
						id="${item.id}%%editable"
						label="Editable"
					/>
					<TextArea
						bind:value={item.value.default}
						label="Default Value"
						id={`${item.id}%%default`}
						className="col-span-2"
					/>
					<TextArea
						bind:value={item.value.style}
						label="Custom Styles"
						id={`${item.id}%%customStyle`}
						className="col-span-2"
					/>
					<TextArea
						bind:value={item.value.options}
						label="Options"
						id={`${item.id}%%options`}
						className="col-span-2"
					/>
				</div>
			</details>
		</li>
	{/each}
	<li class="flex items-center justify-between py-2">
		<button
			onclick={addItem}
			type="button"
			class="group -ml-1 flex w-full items-center rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
		>
			<span
				class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400"
			>
				<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
					/>
				</svg>
			</span>
			<span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">Add</span>
		</button>
	</li>
</ul>

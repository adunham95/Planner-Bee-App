<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import Accordian from '$lib/Components/Accordian.svelte';
	import { eCardComponents, getComponentDetailsByID } from '$lib/data/ecardComponents';
	import EditElements from '$lib/ECard/EditElements.svelte';
	import Select from '$lib/FormElements/Select.svelte';
	import TextArea from '$lib/FormElements/TextArea.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import Toggle from '$lib/FormElements/Toggle.svelte';
	import { toastStore } from '$lib/stores/toast';

	const componentTypes = eCardComponents.map((comp) => {
		return {
			id: comp.id,
			label: comp.name
		};
	});

	export interface Component {
		id: string;
		value: any;
		action?: string;
	}

	interface Props {
		eCardID?: string | null;
		components: Component[];
	}

	let { eCardID, components = $bindable([]) }: Props = $props();

	$inspect(components);
	function generateID(length: number) {
		return [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
	}

	async function addItem() {
		if (!eCardID || eCardID === null) {
			toastStore.show({ type: 'warning', message: 'No ECard ID' });
			return;
		}

		const url = `${PUBLIC_API_URL}/ecard-components`;

		const res = await fetch(url, {
			method: 'POST',
			credentials: 'include', // this is critical
			headers: {
				'Content-Type': 'application/json' // Set content type to JSON
			},
			body: JSON.stringify({
				ecardID: eCardID,
				key: generateID(6),
				ecardComponentID: 'title',
				editable: false
			})
		});
		const responseData = await res.json();
		console.log(responseData);

		components = [
			...components,
			{
				id: responseData.id,
				value: {
					label: responseData.label,
					ecardComponentID: responseData.componentID,
					displayOrder: responseData.order,
					key: responseData.key,
					editable: responseData.editable,
					style: responseData.customStyles,
					options: JSON.stringify(responseData.options || [])
				}
			}
		];
	}

	async function removeItem(idToRemove: string) {
		const url = `${PUBLIC_API_URL}/ecard-components/${idToRemove}`;

		try {
			const res = await fetch(url, {
				method: 'DELETE',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				}
			});
			if (res.ok) {
				components = components.filter((e) => e.id !== idToRemove);
				toastStore.show({ type: 'success', message: 'removed item' });
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function saveECardTemplateItem(component: Component) {
		if (!component) {
			toastStore.show({ type: 'error', message: 'Error saving element' });
			return;
		}
		try {
			const url = `${PUBLIC_API_URL}/ecard-components/${component.id}`;
			const res = await fetch(url, {
				method: 'PATCH',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					...component.value,
					options: component?.value?.options ? JSON.parse(component?.value?.options) : []
				})
			});
		} catch (error) {
			console.log(error);
		}
	}
</script>

<ul role="list" class={`mt-2 divide-y divide-gray-200`}>
	{#each components as item, idx}
		<li
			class={`flex items-end justify-between py-3 w-full ${item.action === 'remove' && 'hidden'}`}
		>
			<Accordian title={item.value.label || 'Component ' + (idx + 1)}>
				{#snippet actions()}
					<button
						onclick={() => removeItem(item.id)}
						type="button"
						class="ml-6 rounded-md text-sm font-medium text-white hover:text-gray-50 cursor-pointer"
					>
						Remove
					</button>
				{/snippet}
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
					<EditElements
						isDevMode
						label="Default Option"
						className="col-span-2"
						name={item.id}
						componentKey={item.value.ecardComponentID}
						bind:value={item.value.default}
					/>
					{#if getComponentDetailsByID(item.value.ecardComponentID).hasCustomStyles}
						<TextArea
							bind:value={item.value.style}
							label="Custom Styles"
							id={`${item.id}%%customStyle`}
							className="col-span-2"
						/>
					{/if}
					{#if getComponentDetailsByID(item.value.ecardComponentID).hasOptions}
						<TextArea
							bind:value={item.value.options}
							label="Options"
							id={`${item.id}%%options`}
							className="col-span-2"
						/>
					{/if}
					<div>
						<button class="btn" onclick={() => saveECardTemplateItem(item)}>Save Element</button>
					</div>
				</div>
			</Accordian>
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

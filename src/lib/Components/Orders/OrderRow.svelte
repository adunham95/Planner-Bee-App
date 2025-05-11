<script lang="ts">
	import type { ECardTemplate } from '../../../app';

	interface Props {
		template: ECardTemplate;
		status?: string;
		cardNumber: string;
	}

	const { template, status, cardNumber }: Props = $props();
</script>

<div class="flex py-6 pb-1 sm:py-10">
	<div class="mr-4 shrink-0">
		<img
			src={template.imageURL}
			alt={template.name}
			class="col-start-2 col-end-3 size-20 rounded-lg object-cover sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:size-40 lg:size-52"
		/>
	</div>
	<div class="min-w-0 flex-1 lg:flex lg:flex-col">
		<div class="lg:flex-1">
			<div class="sm:flex">
				<div>
					<h4 class="font-medium text-gray-900">{template.name}</h4>
					<div class="flex flex-col sm:flex-row items-center">
						<p class="mt-1 font-medium text-gray-900">{cardNumber}</p>
						{#if status}
							<svg
								class="size-1 fill-gray-400 hidden sm:inline-block mx-1"
								viewBox="0 0 6 6"
								aria-hidden="true"
							>
								<circle cx="3" cy="3" r="3" />
							</svg>
							{@render chip(status)}
						{/if}
					</div>
					<p class="mt-2 hidden text-sm text-gray-500 sm:block">
						{template.description}
					</p>
				</div>
			</div>
			<div class="mt-2 sm:flex text-sm font-medium hidden">
				<a href={`/ecard/${cardNumber}`} class="text-primary-600 hover:text-primary-500"
					>View Card</a
				>
				<div class="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
					<a href={`/my-ecards/${cardNumber}`} class="text-primary-600 hover:text-primary-500">
						Details
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-2 flex text-sm font-medium sm:hidden">
	<a href={`/ecard/${cardNumber}`} class="text-primary-600 hover:text-primary-500">View Card</a>
	<div class="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
		<a href={`/my-ecards/${cardNumber}`} class="text-primary-600 hover:text-primary-500">Details</a>
	</div>
</div>

{#snippet chip(status: string)}
	{#if status === 'draft'}
		<span
			class="inline-flex items-center rounded-md bg-info-100 px-2 py-1 text-xs font-medium text-info-600"
		>
			Draft
		</span>
	{/if}
{/snippet}

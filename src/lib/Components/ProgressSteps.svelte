<script lang="ts">
	export interface Step {
		href: string;
		title: string;
		status?: 'completed' | 'inProgress' | 'upcoming';
	}

	interface Props {
		steps: Step[];
	}

	const { steps }: Props = $props();

	const stepStyle = {
		completed: {
			bar: 'border-primary-400 hover:border-primary-800',
			text: 'text-primary-400 group-hover:text-primary-800',
			dot: 'bg-primary-400',
			mergeLine: 'bg-primary-400  text-white'
		},
		inProgress: {
			bar: 'border-primary-600',
			text: 'text-primary-600',
			dot: 'bg-primary-600',
			mergeLine: 'bg-primary-600 text-white'
		},
		upcoming: {
			bar: 'border-gray-200 hover:border-gray-300',
			text: 'text-gray-600 group-hover:text-gray-700',
			dot: 'bg-gray-200 hover:bg-gray-300 ',
			mergeLine: 'bg-gray-200 text-gray-500'
		}
	};
</script>

<nav aria-label="Progress">
	<ol role="list" class="md:mt-0 mt-4 items-center flex justify-center md:space-y-0 md:space-x-8">
		{#each steps as step, idx}
			<li class="md:flex-1 hidden md:block">
				<a
					href={step.href}
					class={`group flex flex-col border-l-4 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0 ${stepStyle[step.status || 'upcoming'].bar}`}
				>
					<span class={`text-sm font-medium ${stepStyle[step.status || 'upcoming'].text}`}
						>Step {idx + 1}</span
					>
					<span class="text-sm font-medium">{step.title}</span>
				</a>
			</li>
			<li class="relative pr-8 sm:pr-20 sm:block md:hidden">
				<!-- Completed Step -->
				{#if idx < steps.length - 1}
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class={`h-0.5 w-full ${stepStyle[step.status || 'upcoming'].dot}`}></div>
					</div>
				{/if}
				<a
					href={step.href}
					class={`relative flex size-8 items-center justify-center rounded-full ${stepStyle[step.status || 'upcoming'].mergeLine}`}
				>
					<!-- <svg
						class="size-5 text-white"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg> -->
					<span class="">{idx + 1}</span>
					<span class="sr-only">{step.title}</span>
				</a>
			</li>
		{/each}
		<!-- <li class="md:flex-1">
			Current Step
			<a
				href="#"
				class="flex flex-col border-l-4 border-primary-600 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
				aria-current="step"
			>
				<span class="text-sm font-medium text-primary-600">Step 2</span>
				<span class="text-sm font-medium">Application form</span>
			</a>
		</li>
		<li class="md:flex-1">
			Upcoming Step
			<a
				href="#"
				class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0"
			>
				<span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 3</span>
				<span class="text-sm font-medium">Preview</span>
			</a>
		</li> -->
	</ol>
</nav>

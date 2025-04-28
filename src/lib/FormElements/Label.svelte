<script lang="ts" module>
	export interface LabelProps {
		label?: string;
		id: string;
		hideLabel?: boolean;
		labelClassName?: string;
	}
</script>

<script lang="ts">
	const { label = '', id, hideLabel = false, labelClassName = '' }: LabelProps = $props();
</script>

<label
	for={id}
	class={`block text-sm font-medium leading-6 ${labelClassName} ${hideLabel ? 'sr-only' : ''}`}
>
	{label}
</label>

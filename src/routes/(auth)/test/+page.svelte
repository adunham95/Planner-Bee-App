<script lang="ts">
	import { toastStore } from '$lib/stores/toast';

	function addToast() {
		console.log('added toast');
		toastStore.show({ message: 'Test Message', type: 'error', details: 'Wait! I have more info' });
	}
</script>

<button onclick={addToast} class="btn">Test</button>

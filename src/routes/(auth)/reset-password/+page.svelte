<script lang="ts">
	let password = $state('');

	async function resetPassword(e: SubmitEvent) {
		e.preventDefault();
	}
</script>

<form class="space-y-6" onsubmit={resetPassword}>
	<h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Reset Password</h2>
	<div>
		<label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
		<div class="mt-2">
			<input
				type="text"
				name="password"
				id="password"
				bind:value={password}
				autocomplete="new-password"
				required
				class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
			/>
		</div>
	</div>
	<div>
		<button
			type="submit"
			class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Reset Password
		</button>
	</div>
</form>

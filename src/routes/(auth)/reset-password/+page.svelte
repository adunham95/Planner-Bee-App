<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { toastStore } from '$lib/stores/toast';

	let password = $state('');
	const token = page.url.searchParams.get('token');

	console.log({ token });

	async function resetPassword(e: SubmitEvent) {
		e.preventDefault();
		const url = `${PUBLIC_API_URL}/auth/reset-password`;

		if (!token) {
			toastStore.show({
				message: 'No Reset Token Found',
				type: 'error',
				details: 'Find the email and make sure you have all the details to rest'
			});
			return;
		}

		try {
			const res = await fetch(url, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					token,
					password
				})
			});
			if (res.ok) {
				const data = await res.json();
				console.log(data);
				toastStore.show({ message: 'Password Reset Successfully' });
				await goto('/login');
			} else {
				const data = await res.json();
				console.log(res, data);
				toastStore.show({
					message: 'Error Resetting Password',
					type: 'error',
					details: data.message
				});
			}
		} catch (error) {
			toastStore.show({ message: 'Error Resetting Password', type: 'error' });
			console.error('There was a problem with the fetch operation:', error);
		}
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

	<div class="flex items-center justify-between">
		<div class="text-sm/6">
			<a href="/login" class="font-semibold text-indigo-600 hover:text-indigo-500"> Login </a>
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

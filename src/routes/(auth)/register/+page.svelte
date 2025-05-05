<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_API_URL } from '$env/static/public';

	let email = $state('');
	let password = $state('');
	let name = $state('');
	let isLoading = $state(false);

	async function login(e: SubmitEvent) {
		e.preventDefault();
		isLoading = true;
		const url = `${PUBLIC_API_URL}/users`;

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					email,
					password,
					name
				})
			});
			if (res.ok) {
				const data = await res.json();
				console.log(data);
				await goto('/login');
				isLoading = false;
			} else {
				const data = await res.json();
				console.log(data);
			}
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
			isLoading = false;
		}
	}
</script>

<form class="space-y-6" onsubmit={login}>
	<h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
		Create your account
	</h2>
	<div>
		<label for="name" class="block text-sm/6 font-medium text-gray-900">Full Name</label>
		<div class="mt-2">
			<input
				type="name"
				name="name"
				id="name"
				autocomplete="name"
				required
				bind:value={name}
				class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
			/>
		</div>
	</div>

	<div>
		<label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
		<div class="mt-2">
			<input
				type="email"
				name="email"
				id="email"
				autocomplete="email"
				required
				bind:value={email}
				class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
			/>
		</div>
	</div>

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
			<a href="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Login</a>
		</div>
	</div>

	<div>
		<button
			type="submit"
			class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Sign in</button
		>
	</div>
</form>

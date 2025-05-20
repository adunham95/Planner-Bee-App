<script>
	import Container from '$lib/Container.svelte';
	import TextInput from '$lib/FormElements/TextInput.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { toastStore } from '$lib/stores/toast.js';

	const { data } = $props();

	console.log({ data });

	let user = $state({
		firstName: data.user.firstName,
		lastName: data.user.lastName,
		email: data.user.email,
		password: undefined
	});

	$inspect(user);

	async function updateProfile() {
		const url = `${PUBLIC_API_URL}/users/${data.user.id}`;
		try {
			const res = await fetch(url, {
				method: 'PATCH',
				credentials: 'include', // this is critical
				headers: {
					'Content-Type': 'application/json' // Set content type to JSON
				},
				body: JSON.stringify({
					...user
				})
			});
			const responseData = await res.json();
			console.log({ responseData });
			if (responseData.id) {
				toastStore.show({ type: 'success', message: 'Profile Updated' });
			}
		} catch (error) {
			toastStore.show({ type: 'error', message: 'Something went wrong' });
		}
	}
</script>

<Container className="mt-5">
	<div class="border-b border-gray-900/10 pb-12">
		<h2 class="text-base/7 font-semibold text-gray-900">Profile Information</h2>
		<!-- <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p> -->

		<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<TextInput
				id="firstName"
				label="First Name"
				className="sm:col-span-3"
				bind:value={user.firstName}
			/>
			<TextInput
				id="lastName"
				label="Last Name"
				className="sm:col-span-3"
				bind:value={user.lastName}
			/>

			<TextInput id="email" label="Email" className="sm:col-span-4" bind:value={user.email} />
			<TextInput
				id="newPassword"
				label="New Password"
				className="sm:col-span-3"
				bind:value={user.password}
			/>
			<div class="sm:col-span-6">
				<button class="btn" onclick={updateProfile}>Update Profile</button>
			</div>
		</div>
	</div>
</Container>

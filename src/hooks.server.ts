import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('accessToken');

	// Optionally attach it to locals
	event.locals.accessToken = accessToken;

	return resolve(event);
};

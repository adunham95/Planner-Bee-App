import { PUBLIC_API_URL } from '$env/static/public';
import type { ECard } from '../../../app';

export const load = async ({ params, cookies }) => {
	console.log(params);
	const token = cookies.get('accessToken');

	const resECards = await fetch(`${PUBLIC_API_URL}/ecards`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
	const eCards: ECard[] = await resECards.json();

	console.log({ eCards });

	return { eCards };
};

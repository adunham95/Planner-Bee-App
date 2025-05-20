import { PUBLIC_API_URL } from '$env/static/public';
import type { ECard } from '../../../../app.js';

export const load = async ({ params, cookies }) => {
	console.log(params);
	const token = cookies.get('accessToken');

	const resECards = await fetch(`${PUBLIC_API_URL}/ecards/${params.number}`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
	const eCard: ECard = await resECards.json();

	console.log({ eCard });

	return { eCard };
};

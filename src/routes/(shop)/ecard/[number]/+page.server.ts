import { PUBLIC_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	console.log(params);

	const resECard = await fetch(`${PUBLIC_API_URL}/ecards/${params.number}`);
	const eCard = await resECard.json();

	console.log({ eCard });

	if (!resECard || eCard.status === 'canceled') {
		error(404, {
			message: 'Not found'
		});
	}

	return { eCard };
};

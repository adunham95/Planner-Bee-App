import { PUBLIC_API_URL } from '$env/static/public';

export const load = async ({ params }) => {
	console.log(params);

	const resECard = await fetch(`${PUBLIC_API_URL}/ecards/${params.number}`);
	const eCard = await resECard.json();

	console.log({ eCard });

	return { eCard };
};

import { PUBLIC_API_URL } from '$env/static/public';
import type { ECardTemplate } from '../../../../../app';

export const load = async ({ params, cookies }) => {
	console.log(params);
	const token = cookies.get('accessToken');

	const resProducts = await fetch(`${PUBLIC_API_URL}/ecard-templates/sku/${params.sku}`);
	const product: ECardTemplate = await resProducts.json();

	const resProfile = await fetch(`${PUBLIC_API_URL}/auth/profile`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
	const profile = await resProfile.json();

	console.log({ product, profile });

	return { product, profile };
};

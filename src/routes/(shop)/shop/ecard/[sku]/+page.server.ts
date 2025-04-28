import { PUBLIC_API_URL } from '$env/static/public';
import type { ECardTemplate } from '../../../../../app';

export const load = async ({ params }) => {
	console.log(params);

	const resProducts = await fetch(`${PUBLIC_API_URL}/ecard-templates/sku/${params.sku}`);
	const product: ECardTemplate = await resProducts.json();

	console.log({ product });

	return { product };
};

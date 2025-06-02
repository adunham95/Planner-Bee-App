import { PUBLIC_API_URL } from '$env/static/public';
import type { ECardTemplate } from '../../../../app';

export const load = async () => {
	const resProducts = await fetch(`${PUBLIC_API_URL}/products/party-boxes`);

	const products: ECardTemplate[] = await resProducts.json();

	return { products };
};

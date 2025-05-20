import { PUBLIC_API_URL } from '$env/static/public';
import type { ECardTemplate } from '../../../app';

export const load = async (event) => {
	console.log(event.cookies.getAll());
	const resProducts = await fetch(`${PUBLIC_API_URL}/ecard-templates`);
	const products: ECardTemplate[] = await resProducts.json();

	return { products };
};

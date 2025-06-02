import { PUBLIC_API_URL } from '$env/static/public';
import type { Product } from '../../../app';

export const load = async (event) => {
	console.log(event.cookies.getAll());
	const resProducts = await fetch(`${PUBLIC_API_URL}/products/all`);
	const products: Product[] = await resProducts.json();

	return { products };
};

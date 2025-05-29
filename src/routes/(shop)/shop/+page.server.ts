import { PUBLIC_API_URL } from '$env/static/public';
import type { Product } from '../../../app';

export const load = async () => {
	const resProducts = await fetch(`${PUBLIC_API_URL}/products`);
	const products: Product[] = await resProducts.json();

	return { products };
};

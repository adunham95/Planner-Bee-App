import type { Categories, FeaturedProduct } from '../../app';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = async () => {
	const res = await fetch(`${PUBLIC_API_URL}/category`);
	const categories: Categories[] = await res.json();

	const resProducts = await fetch(`${PUBLIC_API_URL}/products/featured`);
	const products: FeaturedProduct[] = await resProducts.json();

	console.log({ categories });

	return { categories, products };
};

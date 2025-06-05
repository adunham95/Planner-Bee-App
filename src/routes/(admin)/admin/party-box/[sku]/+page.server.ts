import { PUBLIC_API_URL } from '$env/static/public';
import type { Product } from '../../../../../app';

export const load = async (event) => {
	console.log(event.cookies.getAll());
	const resProduct = await fetch(`${PUBLIC_API_URL}/products/sku/${event.params.sku}`);
	const product: Product = await resProduct.json();

	console.log(product);

	return {
		product
	};
};

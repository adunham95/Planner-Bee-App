import { PUBLIC_API_URL } from '$env/static/public';
import type { ECardTemplate } from '../../../../../app';

export const load = async (event) => {
	console.log(event.cookies.getAll());
	const resProduct = await fetch(`${PUBLIC_API_URL}/ecard-templates/sku/${event.params.sku}`);
	const product: ECardTemplate = await resProduct.json();

	return { eCard: product, components: product.components };
};

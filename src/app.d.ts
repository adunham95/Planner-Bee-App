// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			accessToken?: string;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface User {
	firstName: string;
	lastName: string;
	email: string;
}

interface Categories {
	id: string;
	name: string;
	imageURL: string;
}

interface Product {
	id?: string;
	sku: string;
	name: string;
	description: string;
	price: number | string;
	createdAt?: Date;
	updatedAt?: Date;
	imageURL: string;
	visible: boolean;
	featured: boolean;
	productType: string;
	eCardTemplateSKU?: string;
	eCardTemplate?: ECardTemplate;
}

interface FeaturedProduct {
	id: string;
	ecardTemplate: ECardTemplate;
	createdAt: Date;
	updatedAt: Date;
}

interface ECard {
	deliveryDate?: string;
	eCardNumber: string;
	eCardTemplateSku: string;
	id: string;
	senderEmail?: string;
	senderID?: number;
	status: string;
	eCardTemplate: ECardTemplate;
}

interface ECardTemplate {
	id?: string;
	sku: string;
	name: string;
	description: string;
	cost: number;
	createdAt?: Date;
	updatedAt?: Date;
	includedOptions: string[];
	imageURL: string;
	visible: boolean;
	premium: boolean;
	components?: ECardComponent[];
}

interface ECardComponent {
	id: string;
	key: string;
	ecardComponentID: string;
	ecardID: string;
	label?: string;
	editable?: boolean;
	default?: string;
	customStyles?: string;
	options?: string[];
	createdAt: Date;
	updatedAt: Date;
	order: number;
}

export { Categories, ECardTemplate, ECardComponent, FeaturedProduct, ECard, User, Product };

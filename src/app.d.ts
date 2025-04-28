// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface Categories {
	id: string;
	name: string;
	imageURL: string;
}

interface FeaturedProduct {
	id: string;
	ecardTemplate: ECardTemplate;
	createdAt: Date;
	updatedAt: Date;
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

export { Categories, ECardTemplate, ECardComponent, FeaturedProduct };

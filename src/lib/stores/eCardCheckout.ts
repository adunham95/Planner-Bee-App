import { get, writable } from 'svelte/store';
import type { ECardTemplate } from '../../app';

export interface ECardCart {
	eCardTemplate?: ECardTemplate;
	options: { [key: string]: string };
	isCustom: boolean;
	isFlightplan: boolean;
	sender: {
		email?: string;
		name?: string;
		id?: string;
	};
	recipients: {
		id: number;
		firstName?: string;
		lastName?: string;
		email: string;
		phone?: string;
	}[];
}

const STORAGE_KEY = 'eCard-cart';

const initialCart = {
	isFlightplan: false,
	eCardTemplate: undefined,
	options: {},
	isCustom: false,
	recipients: [],
	sender: {}
};

// Load from sessionStorage
function loadCart() {
	if (typeof sessionStorage !== 'undefined') {
		const stored = sessionStorage.getItem(STORAGE_KEY);
		console.log({ stored });
		return stored ? { ...initialCart, ...JSON.parse(stored) } : initialCart;
	} else {
		return initialCart;
	}
}

// Save to sessionStorage
function saveCart(cart: ECardCart) {
	if (typeof sessionStorage !== 'undefined') {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
	}
}

function createECardCartStore() {
	const { subscribe, update, set } = writable<ECardCart>(loadCart());

	// Automatically persist any changes
	subscribe((cart) => {
		saveCart(cart);
	});

	function initialize(
		eCardTemplate: ECardTemplate,
		options?: { [key: string]: string },
		isCustom?: boolean
	) {
		update((cart) => {
			cart.eCardTemplate = eCardTemplate;
			cart.options = options || {};
			cart.isCustom = isCustom || false;
			return cart;
		});
	}

	function setTemplate(template: ECardTemplate) {
		update((cart) => {
			cart.eCardTemplate = template;
			return cart;
		});
	}

	function enableFlightPlan() {
		update((cart) => {
			cart.isFlightplan = true;
			return cart;
		});
	}

	function setOptions(options: { [key: string]: string }) {
		update((cart) => {
			cart.options = options;
			return cart;
		});
	}

	function updateSender(key: string, value: string) {
		update((cart) => {
			cart.sender = { ...cart.sender, [key]: value };
			return cart;
		});
	}

	function addRecipient() {
		update((cart) => {
			cart.recipients = [...cart.recipients, { id: cart.recipients.length, email: '' }];
			return cart;
		});
	}

	function deleteRecipient(idx: number) {
		update((cart) => {
			// cart.recipients = cart.recipients.filter((r) => r.id !== id);
			// delete cart.recipients[idx];
			cart.recipients.splice(idx, 1);
			return cart;
		});
	}

	function updateRecipient(idx: number, key: string, value: string) {
		update((cart) => {
			cart.recipients[idx] = { ...cart.recipients[idx], [key]: value };
			return cart;
		});
	}

	function clearCart() {
		set(initialCart);
	}

	return {
		subscribe,
		update,
		setTemplate,
		setOptions,
		initialize,
		clearCart,
		addRecipient,
		deleteRecipient,
		updateRecipient,
		updateSender,
		enableFlightPlan
	};
}

export const eCardCartStore = createECardCartStore();

export function getEcardOptions() {
	const cartStore = get(eCardCartStore);
	console.log(cartStore);
	const options = cartStore.options;
	const cardOptions = Object.keys(options).map((key: string) => {
		return { key, value: options[key] };
	});
	// do something with value
	return cardOptions;
}

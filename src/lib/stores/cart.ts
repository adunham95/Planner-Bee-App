import { writable } from 'svelte/store';

export interface CartProduct {
	id: string;
	name: string;
	quantity: number;
	price: string;
	eCardID?: string;
}
export interface Cart {
	orderNumber?: string;
	products: CartProduct[];
}

const STORAGE_KEY = 'order-cart';

const initialCart = {
	orderNumber: undefined,
	products: []
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
function saveCart(cart: Cart) {
	if (typeof sessionStorage !== 'undefined') {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
	}
}

function createCartStore() {
	const { subscribe, update, set } = writable<Cart>(loadCart());

	// Automatically persist any changes
	subscribe((cart) => {
		saveCart(cart);
	});

	function clearCart() {
		set(initialCart);
	}

	function addProductToCart(product: CartProduct) {
		update((cart) => {
			cart.products.push(product);
			return cart;
		});
	}

	function updateOrderNumber(orderNumber: string) {
		update((cart) => {
			cart.orderNumber = orderNumber;
			return cart;
		});
	}

	return { subscribe, clearCart, addProductToCart, updateOrderNumber };
}

export const cartStore = createCartStore();

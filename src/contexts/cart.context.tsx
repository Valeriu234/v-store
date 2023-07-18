import React, { createContext, useState } from "react";

export interface Product {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
	quantity?: number;
}

interface CartContext {
	isCartOpen: boolean;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	cartProducts: Array<Product>;
	setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
	addToCart(productToAdd: Product): void;
}

const addToCartItem = (cartItems: Array<Product>, productToAdd: Product) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<CartContext>({
	isCartOpen: false,
	setIsCartOpen: () => false,
	cartProducts: [],
	setCartProducts: () => [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	addToCart() {},
});

interface CartContextProviderProps {
	children: React.ReactNode;
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
	const [cartProducts, setCartProducts] = useState<Array<Product>>([]);

	const addToCart = (productToAdd: Product) => {
		setCartProducts(addToCartItem(cartProducts, productToAdd));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartProducts,
		setCartProducts,
		addToCart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

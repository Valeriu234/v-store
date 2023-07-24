import React, { createContext, useEffect, useState } from "react";

export interface Product {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
	quantity?: number;
}
export interface ProductWithQuantity extends Product {
	quantity: number;
}

interface CartContext {
	productsQuantity: number;
	productsSum: number;
	isCartOpen: boolean;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	cartProducts: Array<ProductWithQuantity>;
	setCartProducts: React.Dispatch<React.SetStateAction<ProductWithQuantity[]>>;
	addToCart(productToAdd: Product): void;
	incrementProductByOne(idProductToIncrement: string): void;
	decrementProductByOne(idProductToDecrement: string): void;
	deleteProductFromCart(idProductToDelete: string): void;
}

const addToCartItem = (
	cartItems: Array<ProductWithQuantity>,
	productToAdd: Product
) => {
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

const incrementQuantityItem = (
	cartItems: Array<ProductWithQuantity>,
	idProductToIncrement: string
) => {
	return cartItems.map((cartItem) =>
		cartItem.id === idProductToIncrement
			? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem
	);
};
const decrementQuantityItem = (
	cartItems: Array<ProductWithQuantity>,
	idProductToDecrement: string
) => {
	return cartItems.map((cartItem) =>
		cartItem.id === idProductToDecrement && cartItem.quantity > 1
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const removeProduct = (cartItems: Array<ProductWithQuantity>, id: string) => {
	const cartItemsCopy = [...cartItems];
	const indexRemoveItem = cartItems.findIndex((cartItem) => cartItem.id === id);
	cartItemsCopy.splice(indexRemoveItem, 1);
	return cartItemsCopy;
};

/* eslint-disable @typescript-eslint/no-empty-function */
export const CartContext = createContext<CartContext>({
	isCartOpen: false,
	setIsCartOpen: () => false,
	cartProducts: [],
	setCartProducts: () => [],
	addToCart() {},
	incrementProductByOne() {},
	decrementProductByOne() {},
	deleteProductFromCart() {},
	productsQuantity: 0,
	productsSum: 0,
});
/* eslint-enable @typescript-eslint/no-empty-function */
interface CartContextProviderProps {
	children: React.ReactNode;
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
	const [cartProducts, setCartProducts] = useState<Array<ProductWithQuantity>>(
		[]
	);
	const [productsQuantity, setProductsQuantity] = useState<number>(0);
	const [productsSum, setProductsSum] = useState<number>(0);

	const addToCart = (productToAdd: Product) => {
		setCartProducts(addToCartItem(cartProducts, productToAdd));
	};

	const incrementProductByOne = (idProductToIncrement: string) => {
		setCartProducts(incrementQuantityItem(cartProducts, idProductToIncrement));
	};

	const decrementProductByOne = (idProductToDecrement: string) => {
		setCartProducts(decrementQuantityItem(cartProducts, idProductToDecrement));
	};

	const deleteProductFromCart = (idProductToDelete: string) => {
		setCartProducts(removeProduct(cartProducts, idProductToDelete));
	};

	useEffect(() => {
		const calculateProductsQuantity = () => {
			return cartProducts.reduce((accumulator, item) => {
				return accumulator + item.quantity;
			}, 0);
		};
		setProductsQuantity(calculateProductsQuantity());
	}, [cartProducts]);

	useEffect(() => {
		const calculateSumOfProducts = () => {
			return cartProducts.reduce((accumulator, item) => {
				return accumulator + item.quantity * item.price;
			}, 0);
		};
		setProductsSum(calculateSumOfProducts());
	}, [cartProducts]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartProducts,
		setCartProducts,
		addToCart,
		incrementProductByOne,
		decrementProductByOne,
		deleteProductFromCart,
		productsQuantity,
		productsSum,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

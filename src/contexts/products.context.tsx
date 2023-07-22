import React, { createContext, useState, useEffect, useCallback } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

interface Product {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
}

export interface Categories {
	hats: Array<Product>;
	jackets: Array<Product>;
	sneakers: Array<Product>;
	womens: Array<Product>;
	mens: Array<Product>;
}

export type SelectedCategory =
	| "hats"
	| "jackets"
	| "sneakers"
	| "womens"
	| "mens";

interface CategoriesContext {
	categories: Categories | null;
	setCategories: React.Dispatch<React.SetStateAction<Categories | null>>;
	setSelectedCategory: React.Dispatch<
		React.SetStateAction<null | SelectedCategory>
	>;
	selectedShopProducts: Array<Product>;
	selectedCategory: null | SelectedCategory;
}
export const CategoriesContext = createContext<CategoriesContext>({
	categories: null,
	setCategories: () => null,
	setSelectedCategory: () => null,
	selectedShopProducts: [],
	selectedCategory: null,
});

interface CategoriesProviderProps {
	children: React.ReactNode;
}
export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
	const [categories, setCategories] = useState<Categories | null>(null);
	const [selectedCategory, setSelectedCategory] =
		useState<null | SelectedCategory>(null);
	const [selectedShopProducts, setSelectedShopProducts] = useState<
		Array<Product>
	>([]);
	const value = {
		categories,
		setCategories,
		setSelectedCategory,
		selectedShopProducts,
		selectedCategory,
	};

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategories(categoryMap);
		};
		getCategoriesMap();
	}, []);

	const changeSelectedProducts = useCallback(() => {
		if (selectedCategory && categories) {
			setSelectedShopProducts(categories[selectedCategory]);
		}
	}, [categories, selectedCategory]);

	useEffect(() => {
		changeSelectedProducts();
	}, [changeSelectedProducts]);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};

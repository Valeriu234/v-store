import React, { createContext, useState } from "react";

import Products from "../../shop-data.json";

interface Products {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
}

export const ProductsContext = createContext({
	products: Products,
});

interface ProductsProviderProps {
	children: React.ReactNode;
}
export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [products, setProducts] = useState<Array<Products>>(Products);
	const value = { products, setProducts };
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

import React, { createContext, useState } from "react";

interface CartContext {
	isCartOpen: boolean;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CartContext = createContext<CartContext>({
	isCartOpen: false,
	setIsCartOpen: () => false,
});

interface CartContextProviderProps {
	children: React.ReactNode;
}
export const CartProvider = ({ children }: CartContextProviderProps) => {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
	const value = { isCartOpen, setIsCartOpen };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

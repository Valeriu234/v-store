interface Routes {
	HOME: string;
	CONTACTS: string;
	AUTHENTICATION: string;
	SHOP: string;
	SHOP_CATEGORY: string;
	SHOPPING_CART: string;
}

export const ROUTES: Routes = {
	HOME: "/",
	CONTACTS: "/contacts",
	AUTHENTICATION: "authentication",
	SHOP: "/shop",
	SHOP_CATEGORY: "/shop/:category",
	SHOPPING_CART: "/shopping-cart",
};

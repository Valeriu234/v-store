import { Routes, Route } from "react-router-dom";

import CategoriesPageComponent from "./routes/shop/categories-page/categories-page.component.tsx";
import NavigationComponent from "./routes/navigation/navigation.component.tsx";
import LoginPageComponent from "./routes/authentification/login-page/login-page.component.tsx";
import ContactsComponent from "./routes/contacts/contacts-page/contacts.component.tsx";
import SelectedCategoryPageComponent from "./routes/shop/selected-category-page/selected-category-page.component.tsx";
import CartComponent from "./routes/cart/cart-page/cart.component.tsx";
import HomePageComponent from "./routes/home/home-page/home-page.component.tsx";

import { ROUTES } from "./routes/routes.constants.ts";

function App() {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<NavigationComponent />}>
				<Route path={ROUTES.HOME} element={<HomePageComponent />} />
				<Route path={ROUTES.CONTACTS} element={<ContactsComponent />} />
				<Route path={ROUTES.SHOP} element={<CategoriesPageComponent />} />
				<Route
					path={ROUTES.SHOP_CATEGORY}
					element={<SelectedCategoryPageComponent />}
				/>
				<Route path={ROUTES.AUTHENTICATION} element={<LoginPageComponent />} />
				<Route path={ROUTES.SHOPPING_CART} element={<CartComponent />} />
			</Route>
		</Routes>
	);
}

export default App;

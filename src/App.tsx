import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPageComponent from "./routes/shop/categories-page/categories-page.component.tsx";
import NavigationComponent from "./routes/navigation/navigation.component.tsx";
import LoginPageComponent from "./routes/authentification/login-page/login-page.component.tsx";
import ContactsComponent from "./routes/contacts/contacts-page/contacts.component.tsx";
import SelectedCategoryPageComponent from "./routes/shop/selected-category-page/selected-category-page.component.tsx";
import CartComponent from "./routes/cart/cart-page/cart.component.tsx";

import { CategoriesContext } from "./contexts/products.context.tsx";
import HomePageComponent from "./routes/home/home-page/home-page.component.tsx";

function App() {
	const { selectedCategory } = useContext(CategoriesContext);
	return (
		<Routes>
			<Route path="/" element={<NavigationComponent />}>
				<Route path="/" element={<HomePageComponent />} />
				<Route path="/contacts" element={<ContactsComponent />} />
				<Route path="/shop" element={<CategoriesPageComponent />} />
				<Route
					path={`/shop/:${selectedCategory}`}
					element={<SelectedCategoryPageComponent />}
				/>
				<Route path="/sign-in" element={<LoginPageComponent />} />
				<Route path="/shopping-cart" element={<CartComponent />} />
			</Route>
		</Routes>
	);
}

export default App;

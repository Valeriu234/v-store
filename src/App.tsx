import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "./routes/home/home-page/home.component.tsx";
import NavigationComponent from "./routes/navigation/navigation.component.tsx";
import LoginPageComponent from "./routes/authentification/login-page/login-page.component.tsx";
import ContactsComponent from "./routes/contacts/contacts-page/contacts.component.tsx";
import ShopComponent from "./routes/shop/shop.component.tsx";
import CartComponent from "./routes/cart/cart-page/cart.component.tsx";

import { CategoriesContext } from "./contexts/products.context.tsx";

function App() {
	const { selectedCategory } = useContext(CategoriesContext);
	return (
		<Routes>
			<Route path="/" element={<NavigationComponent />}>
				<Route path="/contacts" element={<ContactsComponent />} />
				<Route path="/shop" element={<HomeComponent />} />
				<Route
					path={`/shop/:${selectedCategory}`}
					element={<ShopComponent />}
				/>
				<Route path="/sign-in" element={<LoginPageComponent />} />
				<Route path="/shopping-cart" element={<CartComponent />} />
			</Route>
		</Routes>
	);
}

export default App;

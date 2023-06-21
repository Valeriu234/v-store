import { Routes, Route } from "react-router-dom";

import HomeComponent from "./routes/home/home.component.tsx";
import NavigationComponent from "./routes/navigation/navigation.component.tsx";

import LoginPageComponent from "./routes/authentification/login-page/login-page.component.tsx";

export type category = {
	title: string;
	id: number;
	imageUrl: string;
};
function App() {
	return (
		<Routes>
			<Route path="/" element={<NavigationComponent />}>
				<Route index element={<HomeComponent />} />
				<Route path="shop" element={<HomeComponent />} />
				<Route path="sign-in" element={<LoginPageComponent />} />
			</Route>
		</Routes>
	);
}

export default App;

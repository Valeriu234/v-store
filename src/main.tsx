import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App.tsx";
import { stripePromise } from "./utils/stripe/stripe.utils.js";
import { UserProvider } from "./contexts/user.context.tsx";
import { CategoriesProvider } from "./contexts/products.context.tsx";
import { CartProvider } from "./contexts/cart.context.tsx";
import { ErrorBoundaryComponent } from "./components/error-boundary/error-boundary.component.jsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ErrorBoundaryComponent>
				<CategoriesProvider>
					<UserProvider>
						<CartProvider>
							<Elements stripe={stripePromise}>
								<App />
							</Elements>
						</CartProvider>
					</UserProvider>
				</CategoriesProvider>
			</ErrorBoundaryComponent>
		</BrowserRouter>
	</React.StrictMode>
);

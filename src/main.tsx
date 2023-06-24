import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import { ErrorBoundaryComponent } from "./components/error-boundary/error-boundary.component.jsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ErrorBoundaryComponent>
				<App />
			</ErrorBoundaryComponent>
		</BrowserRouter>
	</React.StrictMode>
);

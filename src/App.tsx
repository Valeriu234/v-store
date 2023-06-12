import { Routes, Route } from "react-router-dom";

import HomeComponent from "./routes/home/home.component.tsx";
import NavigationComponent from "./routes/navigation/navigation.component.tsx";

import "./categories.styles.scss";

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
      </Route>
    </Routes>
  );
}

export default App;

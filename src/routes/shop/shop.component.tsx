import { useContext } from "react";

import { CategoriesContext } from "../../contexts/products.context.tsx";
import ProductCardComponent from "../../components/product-card/product-card.component.tsx";

import "./shop.styles.scss";
const ShopComponent = () => {
	const { selectedShopProducts, selectedCategory } =
		useContext(CategoriesContext);
	return (
		<>
			<h1 className="category-title">{selectedCategory}</h1>
			<div className="shop">
				{selectedShopProducts.map((product) => (
					<ProductCardComponent key={product.id} product={product} />
				))}
			</div>
		</>
	);
};

export default ShopComponent;

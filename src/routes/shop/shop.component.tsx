import { ProductsContext } from "../../contexts/products.context.tsx";
import { useContext } from "react";
import ProductCardComponent from "../../components/product-card/product-card.component.tsx";
import "./shop.styles.scss";
const ShopComponent = () => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="shop">
			{products.map((product) => (
				<ProductCardComponent key={product.id} product={product} />
			))}
		</div>
	);
};

export default ShopComponent;

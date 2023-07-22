import { useContext } from "react";

import { CartContext, Product } from "../../contexts/cart.context.tsx";
import ButtonComponent from "../button/button.component.tsx";

import "./product-card.styles.scss";

interface ProductCardProps {
	product: Product;
}
const ProductCardComponent = ({ product }: ProductCardProps) => {
	const { name, imageUrl, price } = product;
	const { addToCart } = useContext(CartContext);

	const addToCartHandler = () => {
		addToCart(product);
	};

	return (
		<div className="product-card">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-card__information">
				<span className="information__name">{name}</span>
				<span className="information__price">{price}</span>
			</div>
			<ButtonComponent onClick={addToCartHandler} buttonType="inverted">
				Add to cart
			</ButtonComponent>
		</div>
	);
};

export default ProductCardComponent;

import ButtonComponent from "../button/button.component.tsx";

import "./product-card.styles.scss";

type Product = { id: number; name: string; imageUrl: string; price: number };
interface ProductCardProps {
	product: Product;
}
const ProductCardComponent = ({ product }: ProductCardProps) => {
	const { name, imageUrl, price } = product;
	return (
		<div className="product-card">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-card__information">
				<span className="information__name">{name}</span>
				<span className="information__price">{price}</span>
			</div>
			<ButtonComponent buttonType="inverted">Add to cart</ButtonComponent>
		</div>
	);
};

export default ProductCardComponent;

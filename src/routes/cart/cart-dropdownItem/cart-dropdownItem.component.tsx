import { Product } from "../../../contexts/cart.context.tsx";

import "./cart-dropdownItem.styles.scss";

interface CartItemProps {
	cartProductWithCount: Product;
}
const CartDropdownItemComponent = ({ cartProductWithCount }: CartItemProps) => {
	const { price, name, imageUrl, quantity } = cartProductWithCount;
	return (
		<div className="cart-item">
			<img className="cart-item__photo" src={imageUrl} alt={name} />
			<div className="cart-item__info">
				<p className="info__name">{name}</p>
				<span className="info__count">{quantity} x </span>
				<span className="info__price">${price}</span>
			</div>
		</div>
	);
};

export default CartDropdownItemComponent;

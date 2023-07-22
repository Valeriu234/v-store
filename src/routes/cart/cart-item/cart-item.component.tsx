import { ProductWithQuantity } from "../../../contexts/cart.context.tsx";
import QuantityControllerComponent from "../../../components/quantity-controller/quantity-controller.component.tsx";

import { ReactComponent as CloseIcon } from "../../../assets/close.svg";

interface CartItemProps {
	product: ProductWithQuantity;
	incrementProductByOne(idProductToIncrement: string): void;
	decrementProductByOne(idProductToDecrement: string): void;
	deleteProductFromCart(idProductToDelete: string): void;
}
const CartItemComponent = ({
	product,
	incrementProductByOne,
	decrementProductByOne,
	deleteProductFromCart,
}: CartItemProps) => {
	const { name, imageUrl, quantity, id, price } = product;

	const incrementQuantityHandler = () => {
		incrementProductByOne(id);
	};

	const decrementQuantityHandler = () => {
		decrementProductByOne(id);
	};

	const deleteProduct = () => {
		deleteProductFromCart(id);
	};
	return (
		<div className="products__item">
			<div className="img__container">
				<img className="item__img" src={imageUrl} alt={name} />
			</div>
			<span className="item__info">{name}</span>
			<div className="item__info">
				<QuantityControllerComponent
					quantity={quantity}
					decrementQuantityHandler={decrementQuantityHandler}
					incrementQuantityHandler={incrementQuantityHandler}
				/>
			</div>
			<span className="item__info">{price}</span>
			<div className="item__info">
				<CloseIcon onClick={deleteProduct} className="info__close-icon" />
			</div>
		</div>
	);
};

export default CartItemComponent;

import { useContext, useState } from "react";

import { CartContext, Product } from "../../contexts/cart.context.tsx";
import ButtonComponent from "../button/button.component.tsx";

import "./product-card.styles.scss";
import { UserContext } from "../../contexts/user.context.tsx";
import PopupComponent from "../popup/popup.component.tsx";
import NoUserAdvertismentComponent from "../no-user-advertisment/no-user-advertisment.component.tsx";

interface ProductCardProps {
	product: Product;
}
const ProductCardComponent = ({ product }: ProductCardProps) => {
	const { name, imageUrl, price } = product;
	const { addToCart } = useContext(CartContext);
	const { currentUser } = useContext(UserContext);
	const [isAdvertisingPopup, setIsAdvertisingPopup] = useState(false);

	const addToCartHandler = () => {
		if (currentUser) addToCart(product);
		else setIsAdvertisingPopup(true);
	};
	const closeAdvertisingPopup = () => {
		setIsAdvertisingPopup(false);
	};
	return (
		<>
			<div className="product-card">
				<img src={imageUrl} alt={`${name}`} />
				<div className="product-card__information">
					<span className="information__name">{name}</span>
					<span className="information__price">{price}$</span>
				</div>
				<ButtonComponent onClick={addToCartHandler} buttonType="inverted">
					Add to cart
				</ButtonComponent>
			</div>
			<PopupComponent
				isOpen={isAdvertisingPopup}
				onClose={closeAdvertisingPopup}
			>
				<NoUserAdvertismentComponent />
			</PopupComponent>
		</>
	);
};

export default ProductCardComponent;

import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

interface QuantityControllerProps {
	quantity: number;
	decrementQuantityHandler: () => void;
	incrementQuantityHandler: () => void;
}

const QuantityControllerComponent = ({
	decrementQuantityHandler,
	incrementQuantityHandler,
	quantity,
}: QuantityControllerProps) => {
	return (
		<div className="info__quantity-changer">
			<ArrowLeft
				onClick={decrementQuantityHandler}
				className="quantity-changer__arrow"
			/>
			{quantity}
			<ArrowRight
				onClick={incrementQuantityHandler}
				className="quantity-changer__arrow"
			/>
		</div>
	);
};

export default QuantityControllerComponent;

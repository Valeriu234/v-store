import ButtonComponent from "../button/button.component.tsx";

import "./no-user-advertisment.styles.scss";
import { useNavigate } from "react-router-dom";

const NoUserAdvertismentComponent = () => {
	const navigate = useNavigate();
	const yesClickHandler = () => {
		navigate("/sign-in");
	};
	return (
		<>
			<h2 className="advertisment__title">
				Looks like u are not logged,do you want to log in ?
			</h2>
			<div className="popup-content__buttons">
				<ButtonComponent onClick={yesClickHandler} buttonType="default">
					Yes
				</ButtonComponent>
				<ButtonComponent buttonType="default">No</ButtonComponent>
			</div>
		</>
	);
};

export default NoUserAdvertismentComponent;

import React from "react";

import "./button.styles.scss";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	buttonType?: "google" | "inverted" | "default";
	disabled?: boolean;
}

const BUTTON_CLASS_TYPES = {
	google: "google-sign-in",
	inverted: "inverted",
	default: "",
};
const ButtonComponent = ({
	buttonType = "default",
	children,
	...otherProps
}: ButtonProps) => {
	return (
		<button
			className={`button-container ${BUTTON_CLASS_TYPES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default ButtonComponent;

import React from "react";

import "./popup.styles.scss";

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}
const PopupComponent = ({ isOpen, onClose, children }: PopupProps) => {
	if (!isOpen) return null;

	return (
		<div className="popup-overlay" onClick={onClose}>
			<div className="popup-content">{children}</div>
		</div>
	);
};

export default PopupComponent;

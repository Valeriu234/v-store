import React from "react";
import { Link } from "react-router-dom";

interface NavigationItemComponentProps {
	children: React.ReactNode;
	route: string;
	additionalAction?: (e: React.MouseEvent<HTMLElement>) => void;
}
const NavigationItemComponent = ({
	children,
	route,
	additionalAction,
}: NavigationItemComponentProps) => {
	return (
		<Link className="nav-link" to={route} onClick={additionalAction}>
			{children}
		</Link>
	);
};

export default NavigationItemComponent;

import React from "react";
import { Link } from "react-router-dom";

interface NavigationItemComponentProps {
	children: React.ReactNode;
	route: string;
	allowSwitchRoute?: (e: React.MouseEvent<HTMLElement>) => void;
}
const NavigationItemComponent = ({
	children,
	route,
	allowSwitchRoute,
}: NavigationItemComponentProps) => {
	return (
		<Link className="nav-link" to={route} onClick={allowSwitchRoute}>
			{children}
		</Link>
	);
};

export default NavigationItemComponent;

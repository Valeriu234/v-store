import React from "react";

import { Link } from "react-router-dom";

interface NavigationItemComponentProps {
	children: React.ReactNode;
	route: string;
}
const NavigationItemComponent = ({
	children,
	route,
}: NavigationItemComponentProps) => {
	return (
		<Link className="nav-link" to={route}>
			{children}
		</Link>
	);
};

export default NavigationItemComponent;

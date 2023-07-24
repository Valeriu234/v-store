import AboutSectionComponent from "../about-section/about-section.component.tsx";

import "./home-page.styles.scss";
import PartnersSectionComponent from "../partners-section/partners-section.component.tsx";
import TypeProductsSectionComponent from "../types-prodcuts/type-products-section.component.tsx";

const HomePageComponent = () => {
	return (
		<div className="home">
			<AboutSectionComponent />
			<PartnersSectionComponent />
			<TypeProductsSectionComponent />
		</div>
	);
};

export default HomePageComponent;

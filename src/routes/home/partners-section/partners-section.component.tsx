import laCostaLogo from "../../../assets/laCoste-icon.jpg";
import versageLogo from "../../../assets/versage-logo.jpg";
import christianDiorLogo from "../../../assets/christianDior-logo.jpg";
import calvinKleinLogo from "../../../assets/calvinKlein-logo.webp";
import "./partners-section.styles.scss";

const PartnersSectionComponent = () => {
	const logoItems = [
		versageLogo,
		christianDiorLogo,
		calvinKleinLogo,
		laCostaLogo,
	];
	return (
		<>
			<h2 className="section-title">Partners</h2>
			<div className="banners">
				{logoItems.map((logo) => (
					<div className="image-container">
						<img className="banners__img" src={logo} alt="" />
					</div>
				))}
			</div>
			;
		</>
	);
};

export default PartnersSectionComponent;

import girlImage1 from "../../../assets/girl1.png";
import girlImage2 from "../../../assets/girl2.png";
import manImage from "../../../assets/man1.png";

import "./about-section.styles.scss";
import AboutSectionItemComponent from "./about-section-item/about-section-item.component.tsx";

const AboutSectionComponent = () => {
	const aboutItems = [
		{
			text: "This is the best fashion magazine you can find, we are on the market since 2007 and our clients are the most thankful in the world",
			img: girlImage1,
			altImage: "fashionGirl1",
		},
		{
			text: "Our prices are well determined and based on the quality of the products",
			img: girlImage2,
			altImage: "fashionGirl2",
		},
		{
			text: "The quality of our products is recognised as the top quality in entire world by the clothes quality analysers",
			img: manImage,
			altImage: "fashionMan",
		},
	];
	return (
		<>
			<h2 className="section-title">About us</h2>
			<div className="about">
				{aboutItems.map((aboutItem) => {
					const { img, text, altImage } = aboutItem;
					return (
						<AboutSectionItemComponent
							img={img}
							text={text}
							altImage={altImage}
						/>
					);
				})}
			</div>
		</>
	);
};

export default AboutSectionComponent;

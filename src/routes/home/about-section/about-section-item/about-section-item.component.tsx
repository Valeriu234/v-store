import "./about-section-item.styles.scss";

interface AboutSectionItemProps {
	img: string;
	text: string;
	altImage: string;
}
const AboutSectionItemComponent = ({
	img,
	text,
	altImage,
}: AboutSectionItemProps) => {
	return (
		<>
			<div className="about__fashion-girl ">
				<img className="fashion-girl__image " src={img} alt={altImage} />
			</div>
			<div className="about__description">
				<h2 className="description__text">{text}</h2>
			</div>
		</>
	);
};

export default AboutSectionItemComponent;

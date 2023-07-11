import "./contacts-content.styles.scss";
const ContactsContentComponent = () => {
	return (
		<div className="contacts-content">
			<h1 className="contacts-content__title">
				If you encountered any problems or have any questions, you can contact
				us on the link or phone we provided below
			</h1>
			<div className="contacts-content__info">
				<a href="mailto:v-store@gmail.com" className="info__item">
					v-store@gmail.com
				</a>
				<a href="tel:+373621843" className="info__item">
					063435478
				</a>
			</div>
		</div>
	);
};

export default ContactsContentComponent;

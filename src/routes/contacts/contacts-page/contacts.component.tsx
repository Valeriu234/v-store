import { Outlet } from "react-router-dom";
import ContactsContentComponent from "../contacts-content/contacts-content.component.tsx";

const ContactsComponent = () => {
	return (
		<>
			<Outlet />
			<ContactsContentComponent />
		</>
	);
};

export default ContactsComponent;

import "./login-page.styles.scss";

import SignInComponent from "../login/sign-in.component.tsx";
import SignUpComponent from "../register/sign-up.component.tsx";
const LoginPageComponent = () => {
	return (
		<div className="login-page-container">
			<SignInComponent />
			<SignUpComponent />
		</div>
	);
};

export default LoginPageComponent;

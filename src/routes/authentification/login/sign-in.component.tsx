import SignInFormComponent from "../sign-in-form/sign-in-form.component.tsx";

import "./sign-in.styles.scss";

const SignInComponent = () => {
	return (
		<div className="sign-in">
			<h3 className="sign-in__title">I already have an account</h3>
			<p className="sign-in__description">
				Sign in with your email and password
			</p>
			<SignInFormComponent />
		</div>
	);
};

export default SignInComponent;

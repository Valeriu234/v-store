import "./sign-in.styles.scss";

import SignInFormComponent from "../sign-in-form/sign-in-form.component.tsx";

const SignInComponent = () => {
	return (
		<div className="sign-in-container">
			<h3>I already have an account</h3>
			<p>Sign in with your email and password</p>
			<SignInFormComponent />
		</div>
	);
};

export default SignInComponent;

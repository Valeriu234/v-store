import SignUpFormComponent from "../sign-up-form/sign-up-form.component.tsx";

import "./sign-up.styles.scss";

const SignUpComponent = () => {
	return (
		<div className="sign-up">
			<h3 className="sign-up__title">Don't have an account ?</h3>
			<p className="sign-up__description">
				Sign up with your email and password
			</p>
			<SignUpFormComponent />
		</div>
	);
};

export default SignUpComponent;

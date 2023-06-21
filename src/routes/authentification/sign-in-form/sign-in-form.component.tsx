import React, { useState } from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils.js";

import InputComponent from "../../../components/input/input.component.tsx";

import "./sign-in-form.styles.scss";
import ButtonComponent from "../../../components/button/button.component.tsx";

const SignInFormComponent = () => {
	const [signInValues, setSignInValues] = useState({
		email: "",
		password: "",
	});

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		property: string
	) => {
		setSignInValues({ ...signInValues, [property]: e.target.value });
	};
	return (
		<form className="sign-in__form">
			<InputComponent
				type="text"
				placeholder="Email"
				onChange={onChange}
				inputValue={signInValues.email}
				name="email"
			/>
			<InputComponent
				type="password"
				placeholder="Password"
				onChange={onChange}
				inputValue={signInValues.password}
				name="password"
			/>
			<div className="sign-in__form_buttons">
				<ButtonComponent content="Sign In" color="black" />
				<ButtonComponent
					onClickHandler={logGoogleUser}
					content="Sign in with google"
					color="#6f32a8"
				/>
			</div>
		</form>
	);
};

export default SignInFormComponent;

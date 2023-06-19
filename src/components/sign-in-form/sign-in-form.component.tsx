import React, { useState } from "react";

import InputComponent from "../input/input.component.tsx";

import "./sign-in-form.styles.scss";
import ButtonComponent from "../button/button.component.tsx";

const SignInFormComponent = () => {
	const [signInValues, setSignInValues] = useState({
		email: "",
		password: "",
	});

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
				<ButtonComponent content="Sign in with google" color="#6f32a8" />
			</div>
		</form>
	);
};

export default SignInFormComponent;

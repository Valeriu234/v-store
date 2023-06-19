import React, { useState } from "react";

import InputComponent from "../input/input.component.tsx";

import "./sign-up-form.styles.scss";
import ButtonComponent from "../button/button.component.tsx";

const SignUpFormComponent = () => {
	const [signUpValues, setSignUpValues] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		property: string
	) => {
		setSignUpValues({ ...signUpValues, [property]: e.target.value });
	};
	return (
		<form className="sign-up__form">
			<InputComponent
				type="text"
				placeholder="Display Name"
				name="displayName"
				inputValue={signUpValues.displayName}
				onChange={onChange}
			/>
			<InputComponent
				type="email"
				inputValue={signUpValues.email}
				name="email"
				placeholder="Email"
				onChange={onChange}
			/>
			<InputComponent
				type="password"
				inputValue={signUpValues.password}
				name="password"
				placeholder="Password"
				onChange={onChange}
			/>
			<InputComponent
				type="password"
				inputValue={signUpValues.confirmPassword}
				name="confirmPassword"
				placeholder="Confirm password"
				onChange={onChange}
			/>
			<ButtonComponent content="Sign Up" color="black" />
		</form>
	);
};

export default SignUpFormComponent;

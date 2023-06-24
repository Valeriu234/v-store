import React from "react";

import { useFormikSignUpHook } from "../../../hooks/formikHooks/useSignUpFormik.ts";

import InputComponent from "../../../components/input/input.component.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";

import "./sign-up-form.styles.scss";

const SignUpFormComponent = () => {
	const { values, errors, handleChange, handleSubmit } = useFormikSignUpHook();

	const inputData = [
		{
			type: "text",
			inputValue: values.displayName,
			name: "displayName",
			placeholder: "Display Name",
			onChangeHandler: handleChange,
			error: errors.displayName,
		},
		{
			type: "email",
			inputValue: values.email,
			name: "email",
			placeholder: "Email",
			onChangeHandler: handleChange,
			error: errors.email,
		},
		{
			type: "password",
			inputValue: values.password,
			name: "password",
			placeholder: "Password",
			onChangeHandler: handleChange,
			error: errors.password,
		},
		{
			type: "password",
			inputValue: values.password,
			name: "confirmPassword",
			placeholder: "Confirm Password",
			onChangeHandler: handleChange,
			error: errors.confirmPassword,
		},
	];
	const hasFormikValidationErrors = () => {
		return Object.entries(errors);
	};

	const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!hasFormikValidationErrors().length) {
			handleSubmit(event);
		}
	};
	return (
		<form onSubmit={handleSignUpSubmit} className="sign-up__form">
			{inputData.map(
				(
					{ inputValue, onChangeHandler, placeholder, error, type, name },
					index
				) => (
					<InputComponent
						type={type}
						inputValue={inputValue}
						name={name}
						placeholder={placeholder}
						onChangeHandler={onChangeHandler}
						error={error}
						key={index}
					/>
				)
			)}
			<ButtonComponent
				className="sign-up__form_button"
				content="Sign Up"
				color="black"
				type="submit"
			/>
		</form>
	);
};

export default SignUpFormComponent;

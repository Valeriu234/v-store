import React from "react";

import { useFormikSignUpHook } from "../../../hooks/formikHooks/useSignUpFormik.ts";
import InputComponent from "../../../components/input/input.component.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";

import "./sign-up-form.styles.scss";

const SignUpFormComponent = () => {
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		touched,
		setFieldTouched,
		setTouched,
		resetForm,
	} = useFormikSignUpHook();

	const hasFormikErrors = () => {
		return Object.values(errors);
	};

	const setAllFormikSignUpFieldsTouched = () => {
		setTouched({
			displayName: true,
			password: true,
			email: true,
			confirmPassword: true,
		});
	};

	const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		setAllFormikSignUpFieldsTouched();
		event.preventDefault();
		if (!hasFormikErrors().length) {
			handleSubmit(event);
		}
		setTimeout(() => {
			resetForm();
		});
	};

	const signUpInputData = [
		{
			type: "text",
			value: values.displayName,
			name: "displayName",
			placeholder: "Display Name",
			onChange: handleChange,
			error: errors.displayName,
			touched: touched.displayName,
			setTouched: setFieldTouched,
		},
		{
			type: "email",
			value: values.email,
			name: "email",
			placeholder: "Email",
			onChange: handleChange,
			error: errors.email,
			touched: touched.email,
			setTouched: setFieldTouched,
		},
		{
			type: "password",
			value: values.password,
			name: "password",
			placeholder: "Password",
			onChange: handleChange,
			error: errors.password,
			touched: touched.password,
			setTouched: setFieldTouched,
		},
		{
			type: "password",
			value: values.confirmPassword,
			name: "confirmPassword",
			placeholder: "Confirm Password",
			onChange: handleChange,
			error: errors.confirmPassword,
			touched: touched.confirmPassword,
			setTouched: setFieldTouched,
		},
	];

	return (
		<form onSubmit={handleSignUpSubmit} className="sign-up__form">
			{signUpInputData.map(
				(
					{
						value,
						onChange,
						placeholder,
						error,
						type,
						name,
						touched,
						setTouched,
					},
					index
				) => (
					<InputComponent
						type={type}
						value={value}
						name={name}
						placeholder={placeholder}
						onChange={onChange}
						error={error}
						key={index}
						touched={touched}
						setTouched={setTouched}
					/>
				)
			)}
			<ButtonComponent type="submit">Sign UP</ButtonComponent>
		</form>
	);
};

export default SignUpFormComponent;

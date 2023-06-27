import React from "react";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils.js";
import { useFormikSignInHook } from "../../../hooks/formikHooks/useSignInFormik.ts";

import InputComponent from "../../../components/input/input.component.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";

import "./sign-in-form.styles.scss";

const SignInFormComponent = () => {
	const {
		handleChange,
		values,
		errors,
		touched,
		setFieldTouched,
		setTouched,
		handleSubmit,
	} = useFormikSignInHook();

	const signInInputData = [
		{
			type: "email",
			inputValue: values.email,
			name: "email",
			placeholder: "Email",
			onChange: handleChange,
			error: errors.email,
			touched: touched.email,
			setTouched: setFieldTouched,
		},
		{
			type: "password",
			inputValue: values.password,
			name: "password",
			placeholder: "Password",
			onChange: handleChange,
			error: errors.password,
			touched: touched.password,
			setTouched: setFieldTouched,
		},
	];

	const setAllFormikSignInFieldsTouched = () => {
		setTouched({
			email: true,
			password: true,
		});
	};

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAllFormikSignInFieldsTouched();
		handleSubmit();
	};

	return (
		<form onSubmit={handleSignInSubmit} className="sign-in__form">
			{signInInputData.map(
				({
					inputValue,
					onChange,
					placeholder,
					setTouched,
					touched,
					name,
					error,
					type,
				}) => (
					<InputComponent
						type={type}
						placeholder={placeholder}
						onChange={onChange}
						value={inputValue}
						name={name}
						error={error}
						touched={touched}
						setTouched={setTouched}
					/>
				)
			)}

			<div className="sign-in__form_buttons">
				<ButtonComponent type="submit">Sign IN</ButtonComponent>
				<ButtonComponent
					onClick={logGoogleUser}
					type="button"
					buttonType="google"
				>
					Sign in with google
				</ButtonComponent>
			</div>
		</form>
	);
};

export default SignInFormComponent;

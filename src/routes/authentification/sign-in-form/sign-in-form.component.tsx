import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils.js";
import { useFormikSignInHook } from "../../../hooks/formikHooks/useSignInFormik.ts";
import { UserContext } from "../../../contexts/user.context.tsx";

import InputComponent from "../../../components/input/input.component.tsx";

import ButtonComponent from "../../../components/button/button.component.tsx";
import { delayFunction } from "../../../utils/delay.ts";
import "./sign-in-form.styles.scss";

const SignInFormComponent = () => {
	const { currentUser } = useContext(UserContext);
	const navigate = useNavigate();
	const {
		handleChange,
		values,
		errors,
		touched,
		setFieldTouched,
		setTouched,
		handleSubmit,
		resetForm,
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

	const hasFormikErrors = () => {
		return Object.keys(errors);
	};

	const setAllFormikSignInFieldsTouched = () => {
		setTouched({
			email: true,
			password: true,
		});
	};

	const logGoogleUser = async () => {
		await signInWithGooglePopup();
	};

	const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAllFormikSignInFieldsTouched();
		if (!hasFormikErrors().length) {
			handleSubmit();
		}
		if (!currentUser) {
			navigate("/shop");
		}
		delayFunction(resetForm, 300);
	};

	return (
		<form onSubmit={handleSignInSubmit} className="sign-in__form">
			{signInInputData.map(
				(
					{
						inputValue,
						onChange,
						placeholder,
						setTouched,
						touched,
						name,
						error,
						type,
					},
					index
				) => (
					<InputComponent
						key={index}
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

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
	const { handleChange, values, errors } = useFormikSignInHook();

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className="sign-in__form">
			<InputComponent
				type="text"
				placeholder="Email"
				onChangeHandler={handleChange}
				inputValue={values.email}
				name="email"
				error={errors.email}
			/>
			<InputComponent
				type="password"
				placeholder="Password"
				onChangeHandler={handleChange}
				inputValue={values.password}
				name="password"
				error={errors.password}
			/>
			<div className="sign-in__form_buttons">
				<ButtonComponent content="Sign In" color="black" type="submit" />
				<ButtonComponent
					onClickHandler={logGoogleUser}
					content="Sign in with google"
					color="#6f32a8"
					type="button"
				/>
			</div>
		</form>
	);
};

export default SignInFormComponent;

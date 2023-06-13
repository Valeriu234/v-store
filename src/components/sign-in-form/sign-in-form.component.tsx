import React, { useState } from "react";

import InputComponent from "../input/input.component.tsx";

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
		<>
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
		</>
	);
};

export default SignInFormComponent;

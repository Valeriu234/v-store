import React from "react";

import "./input.styles.scss";
import { FormikErrors } from "formik";
import { formikValues } from "../../hooks/formikHooks/useSignUpFormik.ts";

interface InputComponentProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>, property: string) => void;
	placeholder: string;
	value: string;
	type: string;
	name: string;
	error?: string;
	touched?: boolean;
	setTouched: (
		field: string,
		touched?: boolean,
		shouldValidate?: boolean
	) => Promise<FormikErrors<formikValues>> | Promise<void>;
}

const InputComponent = ({
	error,
	touched,
	setTouched,
	name,
	placeholder,
	type,
	onChange,
	value,
}: InputComponentProps) => {
	const touchHandler = () => {
		setTouched(name, true, true);
	};
	return (
		<>
			<div className="input-container">
				<input
					onChange={(e) => {
						onChange(e, name);
					}}
					className="input"
					placeholder={placeholder}
					value={value}
					type={type}
					name={name}
					onBlur={touchHandler}
				/>
				<label htmlFor={name} className="input-label">
					{placeholder}
				</label>
				{error && touched && <span className="error">{error}</span>}
			</div>
		</>
	);
};

export default InputComponent;

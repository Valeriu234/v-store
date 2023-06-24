import React, { useState } from "react";

import "./input.styles.scss";

interface InputComponentProps {
	onChangeHandler: (
		e: React.ChangeEvent<HTMLInputElement>,
		property: string
	) => void;
	placeholder: string;
	inputValue: string;
	type: string;
	name: string;
	error?: string;
}

const InputComponent = ({
	onChangeHandler,
	placeholder,
	inputValue,
	type,
	name,
	error,
}: InputComponentProps) => {
	const [touched, setTouched] = useState(false);
	const changeStylesLabel = () => {
		if (inputValue.length !== 0) {
			return "input-label active";
		} else {
			return "input-label disabled";
		}
	};
	return (
		<>
			<div className="input-container">
				<input
					onChange={(e) => {
						onChangeHandler(e, name);
					}}
					className="input"
					placeholder={placeholder}
					type={type}
					name={name}
					onBlur={() => setTouched(true)}
				/>
				<span className={changeStylesLabel()}>{placeholder}</span>
				{error && touched && <span className="error">{error}</span>}
			</div>
		</>
	);
};

export default InputComponent;

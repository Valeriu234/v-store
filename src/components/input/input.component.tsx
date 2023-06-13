import "./input.styles.scss";
import React from "react";

interface InputComponentProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>, property: string) => void;
	placeholder: string;
	inputValue: string;
	type: string;
	name: string;
}

const InputComponent = ({
	onChange,
	placeholder,
	inputValue,
	type,
	name,
}: InputComponentProps) => {
	const changeStylesLabel = () => {
		if (inputValue.length !== 0) {
			return "input-label active";
		} else {
			return "input-label disabled";
		}
	};
	return (
		<div className="input-container">
			<input
				onChange={(e) => {
					onChange(e, name);
				}}
				className="input"
				placeholder={placeholder}
				type={type}
				name={name}
			/>
			<span className={changeStylesLabel()}>{placeholder}</span>
		</div>
	);
};

export default InputComponent;

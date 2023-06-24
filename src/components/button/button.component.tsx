import "./button.styles.scss";

interface ButtonProps {
	content: string;
	color: string;
	className?: string;
	onClickHandler?: () => Promise<void>;
	type?: "button" | "submit" | "reset";
}
const ButtonComponent = ({
	content,
	color,
	className,
	onClickHandler,
	type,
}: ButtonProps) => {
	return (
		<button
			style={{ backgroundColor: `${color}` }}
			className={`button ${className}`}
			onClick={onClickHandler}
			type={type}
		>
			{content}
		</button>
	);
};

export default ButtonComponent;

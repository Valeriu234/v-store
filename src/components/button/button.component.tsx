import "./button.styles.scss";

interface ButtonProps {
	content: string;
	color: string;
	className?: string;
	onClickHandler?: () => Promise<void>;
}
const ButtonComponent = ({
	content,
	color,
	className,
	onClickHandler,
}: ButtonProps) => {
	return (
		<button
			style={{ backgroundColor: `${color}` }}
			className={`button ${className}`}
			onClick={onClickHandler}
			type="button"
		>
			{content}
		</button>
	);
};

export default ButtonComponent;

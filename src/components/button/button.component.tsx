import "./button.styles.scss";

interface ButtonProps {
	content: string;
	color: string;
	className?: string;
}
const ButtonComponent = ({ content, color, className }: ButtonProps) => {
	return (
		<button
			style={{ backgroundColor: `${color}` }}
			className={`button ${className}`}
		>
			{content}
		</button>
	);
};

export default ButtonComponent;

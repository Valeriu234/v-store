import "./button.styles.scss";

interface ButtonProps {
	content: string;
	color: string;
}
const ButtonComponent = ({ content, color }: ButtonProps) => {
	return (
		<button style={{ backgroundColor: `${color}` }} className="button">
			{content}
		</button>
	);
};

export default ButtonComponent;

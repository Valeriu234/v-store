import CategoryItemComponent from "../category-item/category-item.component.tsx";

import type { category } from "../../../App.tsx";

import "./directory.styles.scss";

interface DirectoryProps {
	categories: Array<category>;
}

const DirectoryComponent = ({ categories }: DirectoryProps) => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItemComponent key={category.id} category={category} />
			))}
		</div>
	);
};

export default DirectoryComponent;

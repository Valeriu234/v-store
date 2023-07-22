import { Category } from "../../routes/home/category-item/category-item.component.tsx";

import "./category-item.styles.scss";

interface CategoryItemProps {
	category: Category;
}

const CategoryItemComponent = ({ category }: CategoryItemProps) => {
	const { title, imageUrl } = category;
	return (
		<div
			className="category-container"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItemComponent;

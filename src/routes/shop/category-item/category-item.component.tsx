import { useContext } from "react";
import { Link } from "react-router-dom";

import { CategoriesContext } from "../../../contexts/products.context.tsx";
import type { SelectedCategory } from "../../../contexts/products.context.tsx";

import "./category-item.styles.scss";

export type Category = {
	title: SelectedCategory;
	id: number;
	imageUrl: string;
};

interface CategoryItemProps {
	category: Category;
}

const CategoryItemComponent = ({ category }: CategoryItemProps) => {
	const { title, imageUrl } = category;
	const { setSelectedCategory } = useContext(CategoriesContext);

	const categoryClickHandler = () => {
		setSelectedCategory(title);
	};

	return (
		<Link
			onClick={categoryClickHandler}
			className="category-container"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			to={`/shop/${title}`}
		>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</Link>
	);
};

export default CategoryItemComponent;

import { category } from "../../shop/categories-page/categories-page.component.tsx";
import CategoryItemComponent from "../../shop/category-item/category-item.component.tsx";

import "./type-products-section.styles.scss";

const TypeProductsSectionComponent = () => {
	const categories: Array<category> = [
		{
			id: 1,
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		},
		{
			id: 2,
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		},
		{
			id: 3,
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		},
		{
			id: 4,
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		},
		{
			id: 5,
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		},
	];
	return (
		<>
			<h2 className="section-title">Types of products</h2>
			<div className="type-products">
				{categories.map((category) => (
					<CategoryItemComponent key={category.id} category={category} />
				))}
			</div>
		</>
	);
};

export default TypeProductsSectionComponent;

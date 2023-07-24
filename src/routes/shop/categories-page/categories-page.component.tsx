import { Outlet } from "react-router-dom";

import DirectoryComponent from "../directory/directory.component.tsx";
import { SelectedCategory } from "../../../contexts/products.context.tsx";

export type category = {
	title: SelectedCategory;
	id: number;
	imageUrl: string;
};
const CategoriesPageComponent = () => {
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
			title: "women",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		},
		{
			id: 5,
			title: "men",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		},
	];

	return (
		<>
			<Outlet />
			<DirectoryComponent categories={categories} />
		</>
	);
};

export default CategoriesPageComponent;

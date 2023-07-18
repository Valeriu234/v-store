import { Outlet } from "react-router-dom";

import DirectoryComponent from "./directory/directory.component.tsx";

export type category = {
	title: string;
	id: number;
	imageUrl: string;
};
const HomeComponent = () => {
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
			title: "mens",
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

export default HomeComponent;

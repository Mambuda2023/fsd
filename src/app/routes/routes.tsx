import { Layout } from "@app/Layout/index";
import { CategoryPage, MainPage } from "@pages/index";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{ index: true, Component: MainPage },
			{ path: "community", element: <a>Comm</a> },
			{ path: ":category", Component: CategoryPage },
			{
				path: "article",
				children: [{ path: ":alias", element: <a>Article</a> }],
			},
			{
				path: "profile",
				children: [
					{ index: true, element: <a>Profile</a> },
					{ path: "edit", element: <a>EditProfile</a> },
				],
			},
		],
	},
]);

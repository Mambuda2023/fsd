import { pathRouter } from "@shared/router/path-router";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: pathRouter.home,
		children: [
			{ index: true, element: <a>Main</a> },
			{ path: pathRouter.community, element: <a>Comm</a> },
			{ path: pathRouter.category, element: <a>Category</a> },
			{
				path: pathRouter.article,
				children: [{ path: pathRouter.alias, element: <a>Article</a> }],
			},
			{
				path: pathRouter.profile,
				children: [
					{ index: true, element: <a>Profile</a> },
					{ path: pathRouter.edit, element: <a>EditProfile</a> },
				],
			},
		],
	},
]);

import { router } from "../routes";
import { createRoot } from "react-dom/client";
import "../styles/index.css";

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />,
);

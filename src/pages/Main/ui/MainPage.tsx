import { ROUTES } from "@shared/routes/path-router";
import { Link } from "react-router-dom";

export const MainPage = () => {
	return (
		<section>
			Главная <Link to={ROUTES.profile.index}>Community</Link>
		</section>
	);
};

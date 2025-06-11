import { ROUTES } from "@shared/routes/path-router";
import { Link } from "react-router-dom";

export const RatingPage = () => {
	return (
		<div>
			Главная <Link to={ROUTES.profile.index}>Профиль</Link>
		</div>
	);
};

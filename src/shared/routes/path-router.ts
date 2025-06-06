export const ROUTES = {
	main: "/",
	community: "/community",
	category: (alias: string) => `/${alias}`,
	article: (alias: string) => `/article/${alias}`,
	edit: "edit",
	alias: ":alias",
	profile: { index: "/profile", edit: "/profile/edit" },
};

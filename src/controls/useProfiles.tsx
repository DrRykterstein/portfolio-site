import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";

// Define profiles style types for specific pages
const useSideBarStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		position: "fixed",
		right: "2rem",
		top: "45%",
	},
	icon: {
		color: "#fff",
		cursor: "pointer",
		margin: theme.spacing(0.8, 0),
	},
}));

const useFooterStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		color: "#fff",
		cursor: "pointer",
		margin: theme.spacing(0.6, 1),
	},
}));

// Determine classes based on the current component being rendered
const useProfiles = (component: string) => {
	const sideBarClasses: ClassNameMap<string> = useSideBarStyles();
	const footerClasses: ClassNameMap<string> = useFooterStyles();
	return component === "Portfolio" ? sideBarClasses : footerClasses;
};

export default useProfiles;

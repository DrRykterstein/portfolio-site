import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import portfolioItems from "../data/portfolioItems";
import { Components } from "./Components";
import "../css/portfolio.css";

// Define custom Mui styles
const useStyles = makeStyles((theme) => ({
	Paper: {
		backgroundColor: "#0F1217",
		cursor: "pointer",
		borderRadius: "10px",
	},
	Link: {
		textDecoration: "none",
	},
	MuiButton__viewSite: {
		fontSize: "18px",
	},
	Typography: {
		backgroundColor: "#e8e8e8",
		padding: theme.spacing(1),
	},
}));

const Portfolio: React.FC = () => {
	const { PortfolioItem } = Components;
	const classes = useStyles();

	return (
		<section className="portfolio__container">
			<a className="portfolio__anchor" id="portfolio"></a>
			<h1 className="section__title">Portfolio</h1>
			<Grid container spacing={2}>
				{portfolioItems.map((item, idx) => (
					<PortfolioItem item={item} classes={classes} />
				))}
			</Grid>
		</section>
	);
};

export default Portfolio;

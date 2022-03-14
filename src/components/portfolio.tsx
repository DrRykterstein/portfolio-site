import React from "react";
import { Link } from "react-router-dom";
import { Components } from "./Components";
import { SharedComponents } from "../shared-components/SharedComponents";
import { useScreenSize } from "../contexts/screenSizeContext";
import portfolioItems from "../data/portfolioItems";
import { Grid, Chip, makeStyles } from "@material-ui/core";
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
				{Object.keys(portfolioItems).map((item, idx) => (
					<PortfolioItem
						key={idx}
						Items={portfolioItems}
						item={item}
						classes={classes}
					/>
				))}
			</Grid>
		</section>
	);
};

export default Portfolio;

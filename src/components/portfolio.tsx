import React from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { Components } from "./Components";
import { SharedComponents } from "../shared-components/SharedComponents";
import { useScreenSize } from "../contexts/screenSizeContext";
import portfolioItems from "../data/portfolioItems";
import "../css/portfolio.css";

// Define custom Mui styles
const useStyles = makeStyles((theme) => ({
	MuiButton__learnMore: {
		borderRadius: "30px",
		padding: theme.spacing(1.5, 3),
		fontSize: "20px",
	},
	MuiButton__viewSite: {
		fontSize: "18px",
	},
	Paper: {
		backgroundColor: "#0F1217",
		cursor: "pointer",
		borderRadius: "15px",
	},
	Link: {
		textDecoration: "none",
	},
	Typography: {
		backgroundColor: "#e8e8e8",
		padding: theme.spacing(1),
	},
}));

const Portfolio: React.FC = () => {
	const { PortfolioItem, Profiles } = Components;
	const { MuiButton } = SharedComponents;
	const classes = useStyles();
	const { screenWidth } = useScreenSize();

	return (
		<main className="portfolio__container">
			<section className="portfolio__intro__container">
				<h1 className="portfolio__intro__title">
					Web Developer specializing in C# and ASP.NET
				</h1>
				{screenWidth > 968 && <Profiles component="Portfolio" />}
				<Link className={classes.Link} to="/contact">
					<MuiButton className={classes.MuiButton__learnMore} color="secondary">
						Learn More
					</MuiButton>
				</Link>
			</section>
			<section className="portfolio__main__container">
				<h1 className="portfolio__main__title">Portfolio</h1>
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
		</main>
	);
};

export default Portfolio;

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
	MuiButton__learnMore: {
		borderRadius: "30px",
		padding: theme.spacing(1.5, 3),
		margin: theme.spacing(2.6, 0, 4, 0),
		fontSize: "20px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
			padding: theme.spacing(1, 2.2),
		},
	},
	MuiButton__viewSite: {
		fontSize: "18px",
	},
	SkillsChip: {
		borderRadius: "5px",
		width: "max-content",
		height: "40px",
		fontSize: "16px",
		backgroundColor: "#212121",
		// color: "#AED581",
		// backgroundColor: "#BDBDBD",
		color: "#B3E5FC",
		[theme.breakpoints.down("xs")]: {
			height: "32px",
			fontSize: "14px",
		},
	},
	Paper: {
		backgroundColor: "#0F1217",
		cursor: "pointer",
		borderRadius: "10px",
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
				<div className="portfolio_intro_titleContainer">
					<h1 className="portfolio__intro__titleFaded">Web Developer</h1>
					<h1 className="portfolio__intro__title">
						Specialized in C# .NET & React
					</h1>
				</div>
				{screenWidth > 968 && <Profiles component="Portfolio" />}
				<Link className={classes.Link} to="/contact">
					<MuiButton className={classes.MuiButton__learnMore} color="secondary">
						Learn More
					</MuiButton>
				</Link>
				<div>
					<Grid container spacing={2}>
						<Grid item>
							<Chip className={classes.SkillsChip} label="C#" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label=".NET" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label="MVC" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label="JavaScript" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label="React" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label="Web API" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label="SQL" />
						</Grid>
						<Grid item>
							<Chip className={classes.SkillsChip} label="TypeScript" />
						</Grid>
					</Grid>
				</div>
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

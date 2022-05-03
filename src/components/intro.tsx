import React from "react";
import { Link } from "react-router-dom";
import { Components } from "./Components";
import { SharedComponents } from "../shared-components/SharedComponents";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Grid, Chip, makeStyles } from "@material-ui/core";
import "../css/intro.css";

const useStyles = makeStyles((theme) => ({
	MuiButton__learnMore: {
		borderRadius: "30px",
		padding: theme.spacing(1.5, 3),
		margin: theme.spacing(4, 0),
		fontSize: "20px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
			padding: theme.spacing(1, 2.2),
		},
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
	Link: {
		textDecoration: "none",
		width: "max-content",
	},
}));

const Intro: React.FC = () => {
	const { Profiles } = Components;
	const { MuiButton } = SharedComponents;
	const classes = useStyles();
	const { screenWidth } = useScreenSize();

	return (
		<section className="intro__container">
			<div className="intro__titleContainer">
				<h1 className="intro__titleFaded">Web Developer</h1>
				<h1 className="intro__title">Specializing in C# .NET & MVC</h1>
			</div>
			{screenWidth > 968 && <Profiles component="Portfolio" />}
			<a className={classes.Link} href="#contact">
				<MuiButton className={classes.MuiButton__learnMore} color="secondary">
					Have a Query?
				</MuiButton>
			</a>
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
	);
};

export default Intro;

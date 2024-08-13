import { Chip, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useScreenSize } from "../contexts/screenSizeContext";
import "../css/intro.css";
import { SharedComponents } from "../shared-components/SharedComponents";
import { Components } from "./Components";

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
				<h1 className="intro__titleFaded">Software Engineer</h1>
				<h1 className="intro__title">Specialising in C# & .NET</h1>
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
						<Chip className={classes.SkillsChip} label="TypeScript" />
					</Grid>
					<Grid item>
						<Chip className={classes.SkillsChip} label="React" />
					</Grid>
					<Grid item>
						<Chip className={classes.SkillsChip} label="Angular" />
					</Grid>
					<Grid item>
						<Chip className={classes.SkillsChip} label="SQL" />
					</Grid>
				</Grid>
			</div>
		</section>
	);
};

export default Intro;

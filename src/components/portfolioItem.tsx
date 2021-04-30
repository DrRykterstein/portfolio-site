import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { ImageModel } from "../modules/portfolioImages";
import { Controls } from "../controls/Controls";
import { useScreenSize } from "../contexts/screenSizeContext";

interface Classes {
	[key: string]: string;
}

interface Props {
	Images: ImageModel;
	image: string;
	classes: Classes;
}

const PortfolioItem: React.FC<Props> = ({ Images, image, classes }) => {
	const { screenWidth } = useScreenSize();
	const { MuiButton, Popup, AnchorLink, SvgIcon } = Controls;
	const { title, name, github, link, desc } = Images[image];
	const [descSize, setDescSize] = useState("");

	// Set new description font size upon screen width change
	useEffect(() => {
		if (screenWidth > 768) {
			return setDescSize("h6");
		}
		setDescSize("body1");
	}, [screenWidth]);

	// Display full app description on desktop via a popup trigger on mobile
	const handleProjectDescription = () => {
		// Initialize Popup trigger component
		const Trigger = ({ onClick }: any) => (
			<Typography className="popup__link" variant="h6" onClick={onClick}>
				Read App Description...
			</Typography>
		);

		return screenWidth <= 668 ||
			(screenWidth > 960 && screenWidth < 1400) ? (
			<Popup
				open
				Trigger={Trigger}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				transformOrigin={{ vertical: "bottom", horizontal: "center" }}
				elevation={8}
			>
				<Typography className={classes.typography}>{desc}</Typography>
			</Popup>
		) : (
			<Typography
				className="portfolio__grid__text"
				variant={descSize === "h6" ? "h6" : "body1"}
			>
				{desc}
			</Typography>
		);
	};

	return (
		<Grid item xs={12} md={6}>
			<Paper className={`${classes.Paper} portfolio__grid__item`}>
				<h1 className="portfolio__grid__title">{title}</h1>
				<div className={classes.ImageContainer}>
					<img
						className="portfolio__grid__image"
						src={`${process.env.PUBLIC_URL}/images/${name}`}
						alt="Loading..."
					/>
					<div className="portfolio__grid__overlay">
						<div className="overlay__item">
							<AnchorLink href={`https://github.com/Terioch/${github}`}>
								<SvgIcon
									className={`portfolio__grid__github`}
									height="32"
									width="32"
								>
									<path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
								</SvgIcon>
							</AnchorLink>
							<AnchorLink className={classes.Link} href={link}>
								<MuiButton
									className={classes.MuiButton__viewSite}
									size={screenWidth <= 568 ? "medium" : "large"}
								>
									View Site
								</MuiButton>
							</AnchorLink>
							{handleProjectDescription()}
						</div>
					</div>
				</div>
			</Paper>
		</Grid>
	);
};

export default PortfolioItem;

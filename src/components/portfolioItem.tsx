import { Grid, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useScreenSize } from "../contexts/screenSizeContext";
import usePopup from "../controls/usePopup";
import { Classes } from "../models/Classes";
import { SharedComponents } from "../shared-components/SharedComponents";
import { PortfolioItem as IPortfolioItem } from "../data/portfolioItems";

interface Props {
	item: IPortfolioItem;
	classes: Classes;
}

const PortfolioItem = ({ item, classes }: Props) => {
	const { MuiButton, Popup, AnchorLink, SvgIcon } = SharedComponents;
	const { anchor, handleAnchorOpen, handleAnchorClose } = usePopup();
	const { screenWidth } = useScreenSize();
	const [descSize, setDescSize] = useState("");

	// Set new description font size upon screen width change
	useEffect(() => {
		if (screenWidth > 768) {
			return setDescSize("h6");
		}
		setDescSize("body1");
	}, [screenWidth]);

	// Display full app description on desktop via a popup trigger on mobile
	const renderProjectDescription = () =>
		screenWidth <= 668 || (screenWidth > 960 && screenWidth < 1400) ? (
			<>
				<Typography
					className="popup__link"
					variant={screenWidth <= 468 ? "body1" : "h6"}
					onClick={handleAnchorOpen}
				>
					Read App Description...
				</Typography>
				<Popup
					open
					anchor={anchor}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					transformOrigin={{ vertical: "bottom", horizontal: "center" }}
					onClose={handleAnchorClose}
				>
					<Typography className={classes.Typography}>{item.desc}</Typography>
				</Popup>
			</>
		) : (
			<Typography
				className="portfolio__grid__text"
				variant={descSize === "h6" ? "h6" : "body1"}
			>
				{item.desc}
			</Typography>
		);

	return (
		<Grid item xs={12} md={6}>
			<Paper className={`${classes.Paper} portfolio__grid__item`}>
				<h1 className="portfolio__grid__title">{item.title}</h1>
				<div className="portfolio__grid__imageContainer">
					<img
						className="portfolio__grid__image"
						src={`${process.env.PUBLIC_URL}/images/${item.src}`}
						alt="Loading..."
					/>
					<div className="portfolio__grid__overlay">
						<div className="portfolio__grid__overlay__items">
							<AnchorLink href={`https://github.com/Terioch/${item.github}`}>
								<SvgIcon
									className={`portfolio__grid__github`}
									width={screenWidth <= 414 ? "25" : "35"}
									height={screenWidth <= 414 ? "25" : "35"}
								>
									<path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
								</SvgIcon>
								{/* <Popup open anchor={anchor}>
									<Typography className={classes.Typography}>
										View Code in Github
									</Typography>
								</Popup> */}
							</AnchorLink>
							{item.isLive && (
								<AnchorLink className={classes.Link} href={item.link}>
									<MuiButton
										className={classes.MuiButton__viewSite}
										size={
											screenWidth <= 568
												? screenWidth <= 368
													? "small"
													: "medium"
												: "large"
										}
										color="primary"
									>
										View Site
									</MuiButton>
								</AnchorLink>
							)}

							{renderProjectDescription()}
						</div>
					</div>
				</div>
			</Paper>
		</Grid>
	);
};

export default PortfolioItem;

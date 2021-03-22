import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { ImagesTypes } from "../modules/portfolioImages";
import { Controls } from "../controls/Controls";

interface Props {
  Images: ImagesTypes;
  image: string;
  classes: any;
}

const PortfolioItem: React.FC<Props> = ({ Images, image, classes }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper className={`${classes.Paper} portfolio__grid__item`}>
        <h1 className="portfolio__grid__title">{Images[image].title}</h1>
        <div className={classes.imageContainer}>
          <img 
            className="portfolio__grid__image"
            src={`/images/${Images[image].name}.png`} 
            alt="Loading..."
          />
          <div className="portfolio__grid__overlay">
            <a className={classes.Link} 
              href={Images[image].link}
              target="__blank"
              rel="noopener noreferrer"
            >
              <Controls.MuiButton className={classes.MuiButton__viewSite}>
                View Site
              </Controls.MuiButton>
            </a>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default PortfolioItem;
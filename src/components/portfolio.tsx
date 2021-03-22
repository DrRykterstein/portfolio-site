import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { Controls } from "../controls/Controls";
import Images from "../modules/portfolioImages";
import { Components } from "./Components";
import "../css/portfolio.css";

// Define custom Mui styles
const useStyles = makeStyles(theme => ({
  MuiButton__learnMore: {
    borderRadius: "30px",
    padding: theme.spacing(1.5, 3),
    fontSize: "20px"
  },
  MuiButton__viewSite: {
    position: "relative",
    top: "45%",
    fontSize: "18px"
  },
  Paper: {
    padding: theme.spacing(0),
    backgroundColor: "#0F1217",
    cursor: "pointer",
    borderRadius: "15px"
  },
  imageContainer: {
    position: "relative"
  },
  Link: {
    textDecoration: "none"
  }
}));

const Portfolio: React.FC = () => {
  const classes = useStyles(); // Instantiate useStyles class within classes object
  const { PortfolioItem, Profiles } = Components;
  const { MuiButton } = Controls;

  // Render sidebar profiles programmatically depending on screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Listen for screen size change
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <main className="portfolio__container">
      <section className="portfolio__intro__container">
        <h1 className="portfolio__intro__title">
          Frontend ReactJS Developer based in the UK
        </h1>
        {screenWidth > 968 && <Profiles component="Portfolio" />}
        <Link className={classes.Link} to="/contact">
          <MuiButton className={classes.MuiButton__learnMore}>
            Learn More
          </MuiButton>
        </Link>
      </section>
      <section className="portfolio__main__container">
        <h1 className="portfolio__main__title">Portfolio</h1>
        <Grid container spacing={2}>
          {Object.keys(Images).map((image, idx) => (
            <PortfolioItem 
              key={idx}
              Images={Images}
              image={image}
              classes={classes}
            />
          ))}
        </Grid>
      </section>
    </main>
  );
}

export default Portfolio;
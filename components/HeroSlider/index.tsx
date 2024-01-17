import React from "react";
import { Grid } from "@mui/material";

const HeroSlider = ({ className = "" }) => {
  return (
    <Grid className={`heroSliderArea ${className}`}>
      <Grid>
        <Grid
          className="slideWrapper"
          style={{
            background: `url('/images/slider/slide-1.png') no-repeat top center / contain`,
          }}
        >
          <Grid container className="container">
            <Grid item lg={8} xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HeroSlider;

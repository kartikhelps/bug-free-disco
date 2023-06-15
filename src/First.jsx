import React from "react";
import { Banner } from "./components/Banner";
import ImgMediaCard from "./components/Card";
import { Button, Grid } from "@mui/material";
import Footer from "./components/Footer";

export const First = () => {
  return (
    <>
      hello world
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        consequuntur rerum incidunt eius facere veniam debitis. Accusantium sit
        maiores eos.
      </div>
      <Banner />
      Explore Top Properties We find the absolute best prices on plots & flats
      {/* <CustomCard/> */}
      <Grid container spacing={2}>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Grid>
      <Button variant="contained">Load more </Button>
      <Footer />
    </>
  );
};

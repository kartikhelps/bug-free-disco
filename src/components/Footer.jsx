import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Column 1</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero nec dolor porta, id fermentum lectus rutrum.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Column 2</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero nec dolor porta, id fermentum lectus rutrum.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Column 3</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero nec dolor porta, id fermentum lectus rutrum.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

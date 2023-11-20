import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function AlbumLayout() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign={'center'}
      style={{ height: '100vh' }}
    >
      <Typography variant="body1" gutterBottom>
        <h1>Album Layout</h1>
       <p> Something short and leading about the collection below—its contents, the creator, etc.
        Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Main
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Secondary
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AlbumLayout;

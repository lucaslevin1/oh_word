import React from 'react';
import { Grid } from 'semantic-ui-react';

const FiveByFiveGrid = ({ children }) => {
  return (
    <Grid columns={5} className='no-margin-top'>
      {children}
    </Grid>
  );
};

export default FiveByFiveGrid;

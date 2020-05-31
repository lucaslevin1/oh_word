import React from 'react';
import { Grid } from 'semantic-ui-react';

const SpyCard = ({ cardColor }) => {
  return (
    <Grid.Column className='minimal-grid-padding'>
      <div
        className={`game-card game-card--spymaster-view game-card--${cardColor}`}
      />
    </Grid.Column>
  );
};

export default SpyCard;

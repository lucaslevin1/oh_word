import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const Score = () => {
  const {
    state: { redScore, blueScore },
  } = useContext(GameContext);

  return (
    <Grid.Column>
      <div className='score-container'>
        <div className='score-box score-box--blue'>
          <p>{blueScore}/9</p>
        </div>
        <div className='score-box score-box--red'>
          <p>{redScore}/8</p>
        </div>
      </div>
    </Grid.Column>
  );
};

export default Score;

import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const Score = () => {
  const {
    state: { redScore, blueScore },
  } = useContext(GameContext);

  return (
    <Grid.Column verticalAlign='middle'>
      <div className='score-box-container'>
        <div className='score-box score-box--blue'>
          <p className='label circlular-std-book'>{blueScore}/9</p>
        </div>
        <div className='score-box score-box--red'>
          <p className='label circlular-std-book'>{redScore}/8</p>
        </div>
      </div>
    </Grid.Column>
  );
};

export default Score;

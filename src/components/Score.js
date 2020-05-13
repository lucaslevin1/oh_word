import React, { useContext } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const Score = () => {
  const {
    state: { redScore, blueScore },
  } = useContext(GameContext);

  return (
    <Grid.Column width={8} textAlign='left'>
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column width={4}>
          <Header size='medium' color='blue'>
            Blue: {blueScore}/9
          </Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header size='medium' color='red'>
            Red: {redScore}/8
          </Header>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  );
};

export default Score;

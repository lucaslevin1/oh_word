import React, { useContext } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import Score from './Score';
import TurnContainer from './TurnContainer';
import GameCard from './GameCard';
import { Context as GameContext } from '../context/gameContext';

const Game = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  return (
    <React.Fragment>
      <Header as='h1' textAlign='center'>
        Porkeroni
      </Header>
      <Grid colums='equal' verticalAlign='middle'>
        <Score />
        <TurnContainer />
      </Grid>
      <Grid columns={5}>
        {cards.map((card) => {
          return <GameCard key={card.id} card={card} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Game;

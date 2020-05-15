import React, { useContext } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import ViewSpyMasterButton from './ViewSpyMasterButton';
import Score from './Score';
import TurnContainer from './TurnContainer';
import GameCard from './GameCard';
import { Context as GameContext } from '../context/gameContext';
import FiveByFiveGrid from './FiveByFiveGrid';

const Game = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  return (
    <React.Fragment>
      <Header as='h1' textAlign='center'>
        Oh Word
      </Header>
      <Grid colums='equal' verticalAlign='middle'>
        <Score />
        <TurnContainer />
      </Grid>
      <FiveByFiveGrid>
        {cards.map((card) => {
          return <GameCard key={card.id} card={card} />;
        })}
      </FiveByFiveGrid>
      <ViewSpyMasterButton />
    </React.Fragment>
  );
};

export default Game;

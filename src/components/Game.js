import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import ViewSpyMasterButton from './ViewSpyMasterButton';
import Score from './Score';
import TurnContainer from './TurnContainer';
import GameCard from './GameCard';
import FiveByFiveGrid from './FiveByFiveGrid';
import TimerContainer from './TimerContainer';
import { Context as GameContext } from '../context/gameContext';

const Game = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  return (
    <React.Fragment>
      <Header />
      <Grid columns='equal' verticalAlign='middle'>
        <TimerContainer />
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

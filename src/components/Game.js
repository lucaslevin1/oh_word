import React, { useContext, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import ViewSpyMasterButton from './ViewSpyMasterButton';
import Score from './Score';
import TurnContainer from './TurnContainer';
import GameCard from './GameCard';
import FiveByFiveGrid from './FiveByFiveGrid';
import Timer from './Timer';
import TimerContainer from './TimerContainer';
import Instructions from './Instructions';
import { Context as GameContext } from '../context/gameContext';

const Game = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  const [isTimerActive, setIsTimerActive] = useState(false);

  return (
    <React.Fragment>
      <Grid columns={2}>
        <Grid.Column width={12}>
          <div className='main-content-container'>
            <Header />
            <div className='seconds-container'>
              {isTimerActive ? <Timer /> : null}
            </div>
            <Grid columns='equal' verticalAlign='middle'>
              <TimerContainer
                isTimerActive={isTimerActive}
                setIsTimerActive={setIsTimerActive}
              />
              <Score />
              <TurnContainer />
            </Grid>
            <FiveByFiveGrid>
              {cards.map((card) => {
                return <GameCard key={card.id} card={card} />;
              })}
            </FiveByFiveGrid>
            <ViewSpyMasterButton />
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <Instructions />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

export default Game;

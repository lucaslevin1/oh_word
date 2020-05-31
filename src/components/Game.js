import React, { useContext, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import Score from './Score';
import TurnContainer from './TurnContainer';
import GameCard from './GameCard';
import FiveByFiveGrid from './FiveByFiveGrid';
import Timer from './Timer';
import TimerOptions from './TimerOptions';
import Instructions from './Instructions';
import DeveloperModal from './DeveloperModal';
import { Context as GameContext } from '../context/gameContext';
import { gameSessionLetters } from '../constants';

const Game = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const createGameSessionId = () => {
    const gameSessionId = [];

    while (gameSessionId.length < 4) {
      gameSessionId.push(
        gameSessionLetters[
          Math.floor(Math.random() * gameSessionLetters.length)
        ]
      );
    }

    return gameSessionId.join('');
  };

  const [gameSessionId, setGameSessionId] = useState(createGameSessionId());

  return (
    <React.Fragment>
      <Grid columns={2}>
        <Grid.Column width={showInstructions ? 12 : 16}>
          <div
            className={`main-content-container${
              showInstructions ? '' : '--extra-padding'
            }`}
          >
            <Header
              gameSessionId={gameSessionId}
              showInstructions={showInstructions}
              setShowInstructions={setShowInstructions}
            />
            <div className='seconds-container'>
              {isTimerActive ? <Timer /> : null}
            </div>
            <Grid columns='equal' verticalAlign='middle'>
              <TimerOptions
                isTimerActive={isTimerActive}
                setIsTimerActive={setIsTimerActive}
              />
              <Score />
              <TurnContainer
                setIsTimerActive={setIsTimerActive}
                isTimerActive={isTimerActive}
              />
            </Grid>
            <FiveByFiveGrid>
              {cards.map((card) => {
                return <GameCard key={card.id} card={card} />;
              })}
            </FiveByFiveGrid>
            <DeveloperModal />
          </div>
        </Grid.Column>
        {showInstructions ? (
          <Grid.Column width={4}>
            <Instructions
              gameSessionId={gameSessionId}
              setShowInstructions={setShowInstructions}
            />
          </Grid.Column>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};

export default Game;

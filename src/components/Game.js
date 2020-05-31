import React, { useContext, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import GameOptions from './GameOptions';
import FiveByFiveGrid from './FiveByFiveGrid';
import GameCard from './GameCard';
import DeveloperModal from './DeveloperModal';
import Instructions from './Instructions';
import { Context as GameContext } from '../context/gameContext';
import { gameSessionLetters } from '../constants';

const Game = () => {
  const {
    state: { cards },
  } = useContext(GameContext);
  const [showInstructions, setShowInstructions] = useState(true);
  const [gameSessionId] = useState(createGameSessionId());

  return (
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
          <GameOptions />
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
  );
};

export default Game;

const createGameSessionId = () => {
  const gameSessionId = [];

  while (gameSessionId.length < 4) {
    gameSessionId.push(
      gameSessionLetters[Math.floor(Math.random() * gameSessionLetters.length)]
    );
  }

  return gameSessionId.join('');
};

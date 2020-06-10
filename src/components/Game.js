import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import GameInfo from './GameInfo';
import GameBoard from './GameBoard';
import DeveloperModal from './DeveloperModal';
import Instructions from './Instructions';

import { gameSessionLetters } from '../constants';

const Game = () => {
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
          <GameInfo />
          <GameBoard />
          <DeveloperModal />
        </div>
      </Grid.Column>
      {showInstructions ? (
        <Grid.Column width={4} className='no-padding'>
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

// Helper functions
const createGameSessionId = () => {
  const gameSessionId = [];

  while (gameSessionId.length < 4) {
    gameSessionId.push(
      gameSessionLetters[Math.floor(Math.random() * gameSessionLetters.length)]
    );
  }

  return gameSessionId.join('');
};

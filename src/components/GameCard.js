import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const GameCard = ({ card }) => {
  const { flipCard } = useContext(GameContext);

  return (
    <Grid.Column>
      <div
        className={`game-card ${
          'game-card--' + (card.isFlipped ? card.team : '')
        }`}
        onClick={() => flipCard(card)}
      >
        {card.cardName}
      </div>
    </Grid.Column>
  );
};

export default GameCard;

import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const GameCard = ({ card }) => {
  const {
    state: { winner },
    flipCard,
  } = useContext(GameContext);

  return (
    <Grid.Column className='minimal-grid-padding'>
      <button
        className={`game-card game-card--${
          card.isFlipped ? card.team : ''
        } text-link`}
        onClick={() => flipCard(card)}
        disabled={card.isFlipped || winner}
      >
        {card.isFlipped ? null : (
          <p className='card-text circular-std-book'>{card.cardName}</p>
        )}
      </button>
    </Grid.Column>
  );
};

export default GameCard;

import React, { useContext } from 'react';
import FiveByFiveGrid from './FiveByFiveGrid';
import GameCard from './GameCard';
import { Context as GameContext } from '../context/gameContext';

const GameBoard = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  return (
    <FiveByFiveGrid>
      {cards.map((card) => {
        return <GameCard key={card.id} card={card} />;
      })}
    </FiveByFiveGrid>
  );
};

export default GameBoard;

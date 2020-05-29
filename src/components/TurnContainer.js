import React, { useContext } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const TurnContainer = () => {
  const {
    state: { teamTurn, winner },
    changeTurns,
  } = useContext(GameContext);

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1, str.length);
  };

  const teamStr = capitalizeFirstLetter(teamTurn);

  return (
    <Grid.Column textAlign='right'>
      <div className='end-turn__container'>
        <div className='end-turn__inner-container'>
          <p className='label circlular-std-book end-turn__label'>
            {winner
              ? capitalizeFirstLetter(winner) + ' Wins'
              : teamStr + "'s turn"}
          </p>
          <button
            disabled={winner}
            onClick={() => changeTurns()}
            className='end-turn__button'
          >
            End turn
          </button>
        </div>
      </div>
    </Grid.Column>
  );
};

export default TurnContainer;

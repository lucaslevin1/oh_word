import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const TurnContainer = ({
  isTimerActive,
  setTimerSeconds,
  fullTimerSeconds,
}) => {
  const {
    state: { teamTurn, winner },
    changeTurns,
  } = useContext(GameContext);

  const teamStr = capitalizeFirstLetter(teamTurn);

  const changeTurnHandler = () => {
    changeTurns();
    if (isTimerActive) {
      setTimerSeconds(fullTimerSeconds);
    }
  };

  return (
    <Grid.Column textAlign='right'>
      <div className='end-turn__container'>
        <div className='end-turn__inner-container'>
          <p className='paragraph-text circular-std-book end-turn__label'>
            {winner
              ? capitalizeFirstLetter(winner) + ' Wins'
              : teamStr + "'s turn"}
          </p>
          <button
            disabled={winner}
            onClick={() => changeTurnHandler()}
            className='standard-button red-button'
          >
            End turn
          </button>
        </div>
      </div>
    </Grid.Column>
  );
};

export default TurnContainer;

const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

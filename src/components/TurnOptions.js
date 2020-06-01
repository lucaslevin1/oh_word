import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const TurnOptions = ({ isTimerActive, setTimerSeconds, fullTimerSeconds }) => {
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
    <Grid.Column>
      <div className='end-turn-container'>
        <div className='end-turn-container__inner'>
          <p className='circular-std-book space-bottom-small'>
            {winner
              ? capitalizeFirstLetter(winner) + ' Wins'
              : teamStr + "'s turn"}
          </p>
          <button
            disabled={winner}
            onClick={() => changeTurnHandler()}
            className='standard-button standard-button--red'
          >
            End turn
          </button>
        </div>
      </div>
    </Grid.Column>
  );
};

export default TurnOptions;

// Helper functions
const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

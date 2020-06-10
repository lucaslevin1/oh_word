import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import GameOptions from './GameOptions';
import Score from './Score';
import TurnOptions from './TurnOptions';
import Timer from './Timer';

const GameInfo = () => {
  const fullTimerSeconds = 120;
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(fullTimerSeconds);

  return (
    <React.Fragment>
      <div className='seconds-container text-align-center space-bottom'>
        {isTimerActive ? (
          <Timer
            fullTimerSeconds={fullTimerSeconds}
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
          />
        ) : null}
      </div>
      <div className='space-bottom'>
        <Grid columns='equal' verticalAlign='middle'>
          <GameOptions
            fullTimerSeconds={fullTimerSeconds}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
            setTimerSeconds={setTimerSeconds}
          />
          <Score />
          <TurnOptions
            fullTimerSeconds={fullTimerSeconds}
            isTimerActive={isTimerActive}
            setTimerSeconds={setTimerSeconds}
          />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default GameInfo;

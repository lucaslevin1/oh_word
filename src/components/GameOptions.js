import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import TimerOptions from './TimerOptions';
import Score from './Score';
import TurnOptions from './TurnOptions';
import Timer from './Timer';

const GameOptions = () => {
  const fullTimerSeconds = 120;
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(fullTimerSeconds);

  return (
    <React.Fragment>
      <div className='seconds-container text-align-center'>
        {isTimerActive ? (
          <Timer
            fullTimerSeconds={fullTimerSeconds}
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
          />
        ) : null}
      </div>
      <Grid columns='equal' verticalAlign='middle'>
        <TimerOptions
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
    </React.Fragment>
  );
};

export default GameOptions;

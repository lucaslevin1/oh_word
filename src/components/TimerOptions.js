import React from 'react';
import { Image, Radio, Grid } from 'semantic-ui-react';

const TimerContainer = ({
  isTimerActive,
  setIsTimerActive,
  setTimerSeconds,
  fullTimerSeconds,
}) => {
  const toggleChangeHandler = () => {
    const newTimerStatus = !isTimerActive;

    setIsTimerActive(newTimerStatus);
    if (newTimerStatus) setTimerSeconds(fullTimerSeconds);
  };

  return (
    <Grid.Column>
      <Image src={require('../assets/stopwatch.png')} className='stop-watch' />
      <div className='timer-container'>
        <p className='circular-std-book label space-right'>
          Timer is {isTimerActive ? 'on' : 'off'}
        </p>
        <Radio toggle onChange={() => toggleChangeHandler()} />
      </div>
    </Grid.Column>
  );
};

export default TimerContainer;

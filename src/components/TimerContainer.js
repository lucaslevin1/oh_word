import React from 'react';
import { Image, Radio, Grid } from 'semantic-ui-react';

const TimerContainer = ({ isTimerActive, setIsTimerActive }) => {
  return (
    <Grid.Column>
      <Image src={require('../assets/stopwatch.png')} className='stop-watch' />
      <div className='timer-container'>
        <p className='circular-std-book label space-right'>
          Timer is {isTimerActive ? 'on' : 'off'}
        </p>
        <Radio toggle onChange={() => setIsTimerActive(!isTimerActive)} />
      </div>
    </Grid.Column>
  );
};

export default TimerContainer;

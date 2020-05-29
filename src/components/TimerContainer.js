import React, { useState } from 'react';
import Timer from './Timer';
import { Image, Radio, Grid } from 'semantic-ui-react';

const TimerContainer = () => {
  const [isTimerActive, setIsTimerActive] = useState(false);

  return (
    <Grid.Column>
      {isTimerActive ? <Timer /> : null}
      <Image src={require('../assets/stopwatch.png')} className='stop-watch' />
      <div className='timer-container'>
        <p className='circlular-std-book label space-right'>
          Timer is {isTimerActive ? 'on' : 'off'}
        </p>
        <Radio toggle onChange={() => setIsTimerActive(!isTimerActive)} />
      </div>
    </Grid.Column>
  );
};

export default TimerContainer;

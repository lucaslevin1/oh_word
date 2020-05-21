import React, { useState } from 'react';
import Timer from './Timer';
import { Button } from 'semantic-ui-react';

const TimerContainer = () => {
  const [isTimerActive, setIsTimerActive] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      {isTimerActive ? <Timer /> : null}
      <Button
        toggle
        active={isTimerActive}
        onClick={() => setIsTimerActive(!isTimerActive)}
      >
        Turn timer {isTimerActive ? 'off' : 'on'}
      </Button>
    </div>
  );
};

export default TimerContainer;

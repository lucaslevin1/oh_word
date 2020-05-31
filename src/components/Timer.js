import React, { useState, useEffect, useContext } from 'react';
import { timerSeconds } from '../constants';
import { Context as GameContext } from '../context/gameContext';

const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(timerSeconds);
  const { changeTurns } = useContext(GameContext);

  useEffect(() => {
    if (secondsLeft === 0) {
      setSecondsLeft(timerSeconds);
      changeTurns();
    }

    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, changeTurns]);

  const formatSeconds = (seconds) => {
    const timeArray = [];

    timeArray.push(Math.floor(seconds / 60).toString());
    timeArray.push((seconds % 60).toString());

    let secondsCount = timeArray[1];

    if (secondsCount.length === 1) {
      timeArray[1] = '0' + secondsCount;
    }

    return timeArray.join(':');
  };

  return (
    <p className='paragraph-text circular-std-medium'>
      {formatSeconds(secondsLeft)}
    </p>
  );
};

export default Timer;

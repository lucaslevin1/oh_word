import React, { useEffect, useContext } from 'react';
import { Context as GameContext } from '../context/gameContext';

const Timer = ({ fullTimerSeconds, timerSeconds, setTimerSeconds }) => {
  const { changeTurns } = useContext(GameContext);

  useEffect(() => {
    if (timerSeconds === 0) {
      setTimerSeconds(fullTimerSeconds);
      changeTurns();
    }

    const timer = setTimeout(() => {
      setTimerSeconds(timerSeconds - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [fullTimerSeconds, timerSeconds, setTimerSeconds, changeTurns]);

  return (
    <p className='paragraph-text circular-std-medium'>
      {formatSeconds(timerSeconds)}
    </p>
  );
};

export default Timer;

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

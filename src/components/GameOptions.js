import React, { useContext } from 'react';
import { Radio, Grid, Icon } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const GameOptions = ({
  isTimerActive,
  setIsTimerActive,
  setTimerSeconds,
  fullTimerSeconds,
}) => {
  const { nsfwToggle } = useContext(GameContext);

  const timerToggleChangeHandler = () => {
    const newTimerStatus = !isTimerActive;
    setIsTimerActive(newTimerStatus);
    if (newTimerStatus) setTimerSeconds(fullTimerSeconds);
  };

  return (
    <Grid.Column>
      <Grid>
        <Grid.Row className='no-padding space-bottom-small'>
          <Grid.Column width={1}>
            <Icon name='clock' size='large' className='text-link--blue' />
          </Grid.Column>
          <Grid.Column width={7}>
            <p className='circular-std-book space-right'>Timer</p>
          </Grid.Column>
          <Grid.Column width={7}>
            <Radio toggle onChange={() => timerToggleChangeHandler()} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='no-padding'>
          <Grid.Column width={1}>
            <Icon name='exclamation triangle' size='large' className='yellow' />
          </Grid.Column>
          <Grid.Column width={7} className='game-option'>
            <p className='circular-std-book space-right'>NSFW Cards</p>
          </Grid.Column>
          <Grid.Column width={7}>
            <Radio toggle onChange={() => nsfwToggle()} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
  );
};

export default GameOptions;

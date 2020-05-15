import React, { useContext } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const ViewSpyMasterButton = () => {
  const {
    state: { cardUrlExtension },
  } = useContext(GameContext);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`mailto:?subject=Spy Master Link&body=${process.env.REACT_APP_NGROK}/spymaster/${cardUrlExtension}`}
        >
          <Button>Email Spy Master Link</Button>
        </a>
      </Grid.Column>
    </Grid>
  );
};

export default ViewSpyMasterButton;

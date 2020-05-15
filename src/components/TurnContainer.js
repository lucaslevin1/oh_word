import React, { useState, useContext, useEffect } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';

const TurnContainer = () => {
  const {
    state: { teamTurn, winner },
    changeTurns,
  } = useContext(GameContext);

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1, str.length);
  };

  const [teamStr, setTeamStr] = useState(capitalizeFirstLetter(teamTurn));

  useEffect(() => {
    setTeamStr(capitalizeFirstLetter(teamTurn));
  }, [teamTurn]);

  return (
    <Grid.Column width={8} textAlign='right'>
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column width={8}>
          <Header size='medium'>
            {winner
              ? capitalizeFirstLetter(winner) + ' Wins'
              : teamStr + "'s turn"}
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Button disabled={winner} onClick={() => changeTurns()}>
            End {teamStr}'s Turn
          </Button>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  );
};

export default TurnContainer;

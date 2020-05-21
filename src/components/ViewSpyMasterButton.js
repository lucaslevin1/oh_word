import React, { useContext } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Context as GameContext } from '../context/gameContext';
import { numberOfCards, cardOrderForUrl } from '../constants';

const ViewSpyMasterButton = () => {
  const {
    state: { cards },
  } = useContext(GameContext);

  const createCardUrlExtension = (cards) => {
    const mixedCardLetters = new Array(numberOfCards);
    const cardLetters = cards.map((card) => card.team[0]);

    cardLetters.forEach((cardLetter, index) => {
      mixedCardLetters[cardOrderForUrl[index]] = cardLetter;
    });

    return mixedCardLetters.join('');
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`mailto:?subject=Spy Master Link&body=${
            process.env.REACT_APP_NGROK
          }/spymaster/${createCardUrlExtension(cards)}`}
        >
          <Button>Email Spy Master Link</Button>
        </a>
      </Grid.Column>
    </Grid>
  );
};

export default ViewSpyMasterButton;

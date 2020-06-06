import React, { useContext } from 'react';
import NewTabTextLink from './NewTabTextLink';
import { Context as GameContext } from '../context/gameContext';
import { numberOfCards, cardOrderForUrl } from '../constants';
import { Icon } from 'semantic-ui-react';

const Instructions = ({ gameSessionId, setShowInstructions }) => {
  const {
    state: { cards },
  } = useContext(GameContext);

  const spyMasterUrl = `${
    process.env.REACT_APP_ENV
  }spymaster/${createCardUrlExtension(cards)}/${gameSessionId}`;

  const messageBody = `Game Session: ${gameSessionId} - ${spyMasterUrl}`;

  return (
    <div className='instructions-container'>
      <div className='instructions-close-icon-container'>
        <Icon
          name='close'
          onClick={() => setShowInstructions(false)}
          className='icon-hover'
        />
      </div>

      <div className='instructions-content'>
        <h1 className='circular-std-medium large-header'>Instructions</h1>
        <p className='circular-std-book'>
          1. Share this screen with your friends over Zoom, Google Meet or any
          other video app.
        </p>
        <p className='circular-std-book'>
          2.{' '}
          <NewTabTextLink
            classes='text-link'
            link={`mailto:?subject=Spy Master Link&body=${messageBody}`}
            text='Email'
          />
          ,{' '}
          <NewTabTextLink
            classes='text-link'
            link={`sms:?&body=${messageBody}`}
            text='text'
          />
          , or send the link below to the Spy Master View to your game's Spy
          Masters.
        </p>
        <p className='circular-std-book'>
          3. Have the Spy Masters open the link on either their computer or
          phone - both work.
        </p>
        <p className='circular-std-book'>
          Spy Master View link:{' '}
          <NewTabTextLink
            classes='text-link text-link--white word-wrap'
            link={spyMasterUrl}
            text={spyMasterUrl}
          />
        </p>
        <a
          href='https://en.wikipedia.org/wiki/Codenames_(board_game)'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='standard-button standard-button--yellow'>
            Game Rules
          </button>
        </a>
      </div>
    </div>
  );
};

export default Instructions;

// Helper functions
const createCardUrlExtension = (cards) => {
  const mixedCardLetters = new Array(numberOfCards);
  const cardLetters = cards.map((card) => card.team[0]);

  cardLetters.forEach((cardLetter, index) => {
    mixedCardLetters[cardOrderForUrl[index]] = cardLetter;
  });

  return mixedCardLetters.join('');
};

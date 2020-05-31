import React, { useContext } from 'react';
import { Context as GameContext } from '../context/gameContext';
import { numberOfCards, cardOrderForUrl } from '../constants';
import { Icon } from 'semantic-ui-react';

const Instructions = ({ gameSessionId, setShowInstructions }) => {
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

  const spyMasterUrl = `${
    process.env.REACT_APP_PRODUCTION
  }/spymaster/${createCardUrlExtension(cards)}/${gameSessionId}`;

  const messageBody = `Game Session: ${gameSessionId} ${spyMasterUrl}`;

  return (
    <div className='instructions-container'>
      <div className='instructions-close-icon'>
        <Icon
          name='close'
          onClick={() => setShowInstructions(false)}
          className='icon-hover'
        />
      </div>

      <div className='instructions-content'>
        <p className='circular-std-medium large-header'>Instructions</p>
        <p className='paragraph-text circular-std-book'>
          1. Share this screen with your friends over Zoom, Google Meet or any
          other video app.
        </p>
        <p className='paragraph-text circular-std-book'>
          2.{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-link'
            href={`mailto:?subject=Spy Master Link&body=${messageBody}`}
          >
            Email
          </a>{' '}
          or{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-link'
            href={`sms:?&body=${messageBody}`}
          >
            text
          </a>{' '}
          the link to the Spy Master view and send your game's Spy Masters.
        </p>
        <p className='paragraph-text circular-std-book'>
          3. Have the Spy Masters open the link on either their computer or
          phone - either works.
        </p>
        <p className='paragraph-text circular-std-book'>
          Full link:
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`${spyMasterUrl}`}
            className='text-link url-link word-wrap'
          >
            {' '}
            {spyMasterUrl}
          </a>
        </p>
        <a
          href='https://en.wikipedia.org/wiki/Codenames_(board_game)'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='standard-button game-rules-button'>
            Game Rules
          </button>
        </a>
      </div>
    </div>
  );
};

export default Instructions;

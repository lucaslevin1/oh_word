import React, { useContext } from 'react';
import NewTabTextLink from './NewTabTextLink';
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
  const paragraphStyles = 'paragraph-text circular-std-book';

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
        <p className={paragraphStyles}>
          1. Share this screen with your friends over Zoom, Google Meet or any
          other video app.
        </p>
        <p className={paragraphStyles}>
          2.{' '}
          <NewTabTextLink
            classes='text-link'
            link={`mailto:?subject=Spy Master Link&body=${messageBody}`}
            text='Email'
          />{' '}
          or{' '}
          <NewTabTextLink
            classes='text-link'
            link={`sms:?&body=${messageBody}`}
            text='text'
          />{' '}
          the link to the Spy Master view and send your game's Spy Masters.
        </p>
        <p className={paragraphStyles}>
          3. Have the Spy Masters open the link on either their computer or
          phone - either works.
        </p>
        <p className={paragraphStyles}>
          Full link:{' '}
          <NewTabTextLink
            classes='text-link white-link word-wrap'
            link={spyMasterUrl}
            text={spyMasterUrl}
          />
        </p>
        <a
          href='https://en.wikipedia.org/wiki/Codenames_(board_game)'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='standard-button yellow-button'>Game Rules</button>
        </a>
      </div>
    </div>
  );
};

export default Instructions;

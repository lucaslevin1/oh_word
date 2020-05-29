import React from 'react';

const Instructions = () => {
  return (
    <div className='instructions-box'>
      <p className='circular-std-medium large-header'>Instructions</p>
      <div>
        <p className='label circular-std-book'>
          1. Share this screen with your friends over Zoom, Google Meet or any
          other video app.
        </p>
        <p className='label circular-std-book'>
          2. Email, text or copy the link to the Spy master view and send your
          game's Spy masters.
        </p>
        <p className='label circular-std-book'>
          3. Have the Spy Masters open the link on either their computer or
          phone - either works.
        </p>
      </div>
      <a
        href='https://en.wikipedia.org/wiki/Codenames_(board_game)'
        target='_blank'
        rel='noopener noreferrer'
      >
        <button className='game-rules-button'>Game Rules</button>
      </a>
    </div>
  );
};

export default Instructions;

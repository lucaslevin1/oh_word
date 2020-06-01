import React from 'react';
import { Image } from 'semantic-ui-react';

const Header = ({ gameSessionId, showInstructions, setShowInstructions }) => {
  return (
    <div className='text-align-center space-bottom'>
      <Image
        src={require('../assets/logo.png')}
        className='header-image space-bottom'
        centered={true}
      />
      <p className='header circular-std-medium'>
        Code Names meets Cards Against Humanity
      </p>
      <p className='sub-header circular-std-medium'>
        Game Session: {gameSessionId}
      </p>
      {showInstructions ? null : (
        <p
          className='text-link text-link--blue'
          onClick={() => setShowInstructions(true)}
        >
          Show Instructions
        </p>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import { Image } from 'semantic-ui-react';

const Header = ({ gameSessionId, showInstructions, setShowInstructions }) => {
  return (
    <div className='header-container'>
      <Image
        src={require('../assets/logo.png')}
        className='logo'
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
          className='text-link linkedin-link'
          onClick={() => setShowInstructions(true)}
        >
          Show Instructions
        </p>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import { Image } from 'semantic-ui-react';

const Header = () => {
  return (
    <div className='header-container'>
      <Image
        src={require('../assets/logo.png')}
        className='logo'
        centered={true}
      />
      <p class='header circlular-std-medium'>
        Code Names meets Cards Against Humanity
      </p>
      <p class='sub-header circlular-std-medium'>Game Session: KYDF</p>
    </div>
  );
};

export default Header;

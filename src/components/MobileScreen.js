import React from 'react';
import { Image } from 'semantic-ui-react';

const MobileScreen = () => {
  return (
    <div className='main-content-container-mobile'>
      <Image
        src={require('../assets/logo.png')}
        className='header-image-mobile space-bottom'
        centered={true}
      />
      <p className='space-top circular-std-medium header'>
        Code Names meets Cards Against Humanity
      </p>
      <Image
        src={require('../assets/notebook_pc.jpg')}
        centered={true}
        className='space-top-large desktop-computer-image'
      />
      <a
        className='card-text text-link circular-std-book'
        href='https://www.vecteezy.com/free-vector/laptop'
      >
        Laptop Vectors by Vecteezy
      </a>
      <p className='circular-std-book header space-top'>
        Please visit site on your desktop for the best experience.
      </p>
    </div>
  );
};

export default MobileScreen;

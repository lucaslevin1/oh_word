import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileScreen from './MobileScreen';
import Game from './Game';

const DeviceHandler = () => {
  return (
    <React.Fragment>
      <MobileView>
        <MobileScreen />
      </MobileView>
      <BrowserView>
        <Game />
      </BrowserView>
    </React.Fragment>
  );
};

export default DeviceHandler;

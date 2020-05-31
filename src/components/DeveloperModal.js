import React from 'react';
import { Modal, Image } from 'semantic-ui-react';

const DeveloperModal = () => {
  return (
    <Modal
      trigger={
        <p className='text-link circular-std-book developer-help-link'>
          Want to help the developer out?
        </p>
      }
    >
      <Modal.Header>
        <p className='circular-std-medium'>Want to help the developer out?</p>
      </Modal.Header>
      <Modal.Content image>
        <Image wrapped size='large' src={require('../assets/coding_man.png')} />
        <p className='circular-std-book space-left'>
          I'm currently looking for my next opportunity - if you or anyone you
          know is hiring, please check out my{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-link linkedin-link'
            href='https://www.linkedin.com/in/lucaslevin/'
          >
            LinkedIn
          </a>{' '}
          and reach out if you think there may be a fit.
          <br />
          <br />
          Thank you in advance!
        </p>
      </Modal.Content>
    </Modal>
  );
};

export default DeveloperModal;

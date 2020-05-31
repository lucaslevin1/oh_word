import React from 'react';

const NewTabTextLink = ({ classes, link, text }) => {
  return (
    <a
      href={link}
      className={classes}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  );
};

export default NewTabTextLink;

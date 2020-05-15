import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import FiveByFiveGrid from './FiveByFiveGrid';
import SpyCard from './SpyCard';
import { blue, red, neutral, death, cardOrderForUrl } from '../constants';

const SpyMaster = () => {
  const { cardUrlExtension } = useParams();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const cardOrder = [];
    const cardLetterArr = cardUrlExtension.split('');

    const cardLetterMap = {
      r: red,
      b: blue,
      n: neutral,
      d: death,
    };

    cardOrderForUrl.forEach((number) => {
      cardOrder.push(cardLetterMap[cardLetterArr[number]]);
    });

    setBoard(cardOrder);
  }, [cardUrlExtension]);

  return (
    <React.Fragment>
      <Header as='h1' textAlign='center'>
        SpyMaster View
      </Header>
      <FiveByFiveGrid>
        {board.length
          ? board.map((square, index) => (
              <SpyCard cardColor={square} key={index} />
            ))
          : null}
      </FiveByFiveGrid>
    </React.Fragment>
  );
};

export default SpyMaster;

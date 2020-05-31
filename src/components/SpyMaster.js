import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FiveByFiveGrid from './FiveByFiveGrid';
import SpyCard from './SpyCard';
import { blue, red, neutral, death, cardOrderForUrl } from '../constants';

const SpyMaster = () => {
  const { cardUrlExtension, gameSessionId } = useParams();
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
    <div className='spy-master-container'>
      <div className='spy-master-header-container'>
        <h1 className='circular-std-medium'>
          Spy Master View - {gameSessionId}
        </h1>
      </div>
      <FiveByFiveGrid>
        {board.length
          ? board.map((square, index) => (
              <SpyCard cardColor={square} key={index} />
            ))
          : null}
      </FiveByFiveGrid>
    </div>
  );
};

export default SpyMaster;

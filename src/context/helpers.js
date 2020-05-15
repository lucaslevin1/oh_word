import {
  red,
  blue,
  neutral,
  death,
  cardOrderForUrl,
  numberOfCards,
} from '../constants';

const selectRandomCards = (cards) => {
  const idArray = [],
    cardArray = [];

  while (cardArray.length < numberOfCards) {
    let newCard = cards[Math.floor(Math.random() * cards.length)];

    if (!idArray.includes(newCard.id)) {
      cardArray.push(newCard);
      idArray.push(newCard.id);
    }
  }

  return cardArray;
};

const addCardAttributes = (cards) => {
  const cardTeamMap = {
    blue: 9,
    red: 8,
    neutral: 7,
    death: 1,
  };

  return cards.map((card) => {
    card.isFlipped = false;
    card.team = null;

    if (cardTeamMap.blue) {
      card.team = blue;
      cardTeamMap.blue = cardTeamMap.blue - 1;
    } else if (cardTeamMap.red) {
      card.team = red;
      cardTeamMap.red = cardTeamMap.red - 1;
    } else if (cardTeamMap.neutral) {
      card.team = neutral;
      cardTeamMap.neutral = cardTeamMap.neutral - 1;
    } else {
      card.team = death;
    }

    return card;
  });
};

const shuffleCards = (cards) => {
  let currentIndex = cards.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
};

const createCards = (cards) => {
  return shuffleCards(addCardAttributes(selectRandomCards(cards)));
};

const determineTeamTurnOnFlip = (teamTurn, cardTeam) => {
  if (
    (teamTurn === blue && cardTeam === blue) ||
    (teamTurn === red && cardTeam !== red)
  ) {
    return blue;
  } else if (
    (teamTurn === red && cardTeam === red) ||
    (teamTurn === blue && cardTeam !== blue)
  ) {
    return red;
  }
};

const determineWinner = (teamTurn, blueScore, redScore, cardTeam) => {
  if (cardTeam === death) {
    return teamTurn === blue ? red : blue;
  } else if (blueScore === 8 && cardTeam === blue) {
    return blue;
  } else if (redScore === 7 && cardTeam === red) {
    return red;
  }

  return null;
};

const createCardUrlExtension = (initialCards) => {
  const mixedCardLetters = new Array(numberOfCards);
  const cardLetters = initialCards.map((card) => card.team[0]);

  cardLetters.forEach((cardLetter, index) => {
    mixedCardLetters[cardOrderForUrl[index]] = cardLetter;
  });

  return mixedCardLetters.join('');
};

export {
  createCards,
  determineTeamTurnOnFlip,
  determineWinner,
  createCardUrlExtension,
};

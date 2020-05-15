import createDataContext from './createDataContext';
import cards from '../data/cards.json';
import {
  createCards,
  determineTeamTurnOnFlip,
  determineWinner,
  createCardUrlExtension,
} from './helpers';

import { blue, red, END_TURN, FLIP_CARD } from '../constants';

const initialCards = createCards(cards);
const cardUrlExtension = createCardUrlExtension(initialCards);

const initialState = {
  cards: initialCards,
  blueScore: 0,
  redScore: 0,
  teamTurn: blue,
  winner: null,
  cardUrlExtension,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case END_TURN: {
      return {
        ...state,
        teamTurn: state.teamTurn === blue ? red : blue,
      };
    }
    case FLIP_CARD: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id !== action.payload.id) {
            return card;
          }
          card.isFlipped = true;
          return card;
        }),
        blueScore: state.blueScore + (action.payload.team === blue ? 1 : 0),
        redScore: state.redScore + (action.payload.team === red ? 1 : 0),
        teamTurn: determineTeamTurnOnFlip(state.teamTurn, action.payload.team),
        winner: determineWinner(
          state.teamTurn,
          state.blueScore,
          state.redScore,
          action.payload.team
        ),
      };
    }
    default:
      return state;
  }
};

const changeTurns = (dispatch) => () =>
  dispatch({
    type: END_TURN,
  });

const flipCard = (dispatch) => (card) =>
  dispatch({
    type: FLIP_CARD,
    payload: card,
  });

export const { Provider, Context } = createDataContext(
  gameReducer,
  { changeTurns, flipCard },
  initialState
);

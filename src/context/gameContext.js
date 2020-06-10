import createDataContext from './createDataContext';
import cardData from '../data/cards.json';
import {
  createCards,
  determineTeamTurnOnFlip,
  determineWinner,
} from './helpers';

import { blue, red, END_TURN, FLIP_CARD, NSFW_TOGGLE } from '../constants';

const initialState = {
  cards: createCards(cardData, false),
  blueScore: 0,
  redScore: 0,
  teamTurn: blue,
  winner: null,
  nsfw: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case NSFW_TOGGLE:
      return {
        ...state,
        blueScore: 0,
        redScore: 0,
        teamTurn: blue,
        winner: null,
        nsfw: !state.nsfw,
        cards: createCards(cardData, !state.nsfw),
      };
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

const nsfwToggle = (dispatch) => () => {
  dispatch({
    type: NSFW_TOGGLE,
  });
};

export const { Provider, Context } = createDataContext(
  gameReducer,
  { changeTurns, flipCard, nsfwToggle },
  initialState
);

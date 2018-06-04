import * as types from '../actions/types'

function decks(decks = {}, action) {
  switch(action.type) {
    case types.ADD_CARD:
      const deck = decks[action.title]
      return {
        ...decks,
        [action.title]: {
          ...deck,
          questions: [
            ...deck.questions,
            action.card,
          ]
        }
      }
    case types.ADD_DECK:
      return {
        ...decks,
        [action.deck.title]: action.deck,
      }
    case types.GET_DECKS:
      return action.decks
    default:
      return decks
  }
}

export default decks

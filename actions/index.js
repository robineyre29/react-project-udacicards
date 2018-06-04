import { AsyncStorage } from 'react-native'
import * as API from '../utils/api'
import * as types from './types'

export function getDecks() {
  return async (dispatch) => {
    const decks = await API.getDecks()
    dispatch({
      type: types.GET_DECKS,
      decks,
    })
  }
}

export function addDeck(title) {
  return async (dispatch) => {
    const deck = await API.saveDeckTitle(title)
    dispatch({
      type: types.ADD_DECK,
      deck,
    })
  }
}

export function addCard(title, question, answer) {
  return async (dispatch) => {
    const card = await API.addCardToDeck(title, question, answer)
    dispatch({
      type: types.ADD_CARD,
      title,
      card,
    })
  }
}

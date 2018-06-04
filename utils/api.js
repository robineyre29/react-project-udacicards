import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'udacicards:decks'

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return decks !== null ? JSON.parse(decks) : {}
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export async function getDecksList() {
  const decks = await getDecks()
  return Object.keys(decks).map(key => decks[key])
}

export async function getDeck(title) {
  try {
    const decks = await getDecks()
    return decks[title]
  }
  catch (error) {
    console.log(error)
    return {error}
  }
}

export async function saveDeckTitle(title) {
  try {
    const deck = {title, questions: []}
    const serializedDeck = JSON.stringify({[title]: deck})
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, serializedDeck)
    return deck
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export async function addCardToDeck(title, question, answer) {
  try {
    const card = { question, answer }
    const deck = await getDeck(title)
    const serializedDeck = JSON.stringify({
      [title]: {
        ...deck,
        questions: [...deck.questions, card],
      },
    })
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, serializedDeck)
    return card
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

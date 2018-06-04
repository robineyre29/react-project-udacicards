import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native'
import Button from './Button'
import SolidButton from './SolidButton'
import colors from '../utils/colors'

class Deck extends React.Component {
  render() {
    const { navigation, deck } = this.props
    const { title, questions = [] } = deck
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.cardCount}>
          {questions.length} {questions.length !== 1 ? 'cards' : 'card'}
        </Text>
        <Button
          text='Add Card'
          onPress={() => navigation.navigate(
                          'AddCard',
                          { title, },
                  )}
          additionalStyles={[styles.button]}
        />
        <SolidButton
          text='Start Quiz'
          onPress={() => navigation.navigate(
                          'Quiz',
                          { title, },
                  )}
          disabled={questions.length === 0}
          additionalStyles={[styles.button]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: colors.blue,
    textAlign: 'center',
  },
  cardCount: {
    fontSize: 24,
    color: colors.darkGray,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: '90%',
    marginTop: 20,
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: 20,
  },
})

export default Deck

import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SolidButton from './SolidButton'
import colors from '../utils/colors'

class QuizItem extends React.Component {
  render() {
    const { currentCardIndex, currentCardSide, questions, onFlip, onCorrect, onIncorrect, } = this.props
    const { question, answer } = questions[currentCardIndex]
    return (
      <View style={styles.container}>
        <Text style={styles.index}>
          {currentCardIndex+1}/{questions.length}
        </Text>
        <Text style={styles.title}>
          {currentCardSide === 'question' ? question : answer}
        </Text>
        <TouchableOpacity
          onPress={onFlip}
        >
          <Text style={styles.flipSolidButtonText}>
            {currentCardSide === 'question' ? 'View Answer' : 'View Question'}
          </Text>
        </TouchableOpacity>
        <SolidButton
          text='Correct'
          additionalStyles={[styles.button, styles.correctSolidButton]}
          onPress={onCorrect}
        />
        <SolidButton
          text='Incorrect'
          additionalStyles={[styles.button, styles.incorrectSolidButton]}
          onPress={onIncorrect}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  index: {
    fontSize: 20,
    marginBottom: 50,
    alignSelf: 'flex-start',
    color: colors.blue,
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 28,
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
  correctSolidButton: {
    backgroundColor: colors.green,
  },
  incorrectSolidButton: {
    backgroundColor: colors.red,
  },
  flipSolidButtonText: {
    fontSize: 20,
    color: colors.blue,
  },
})

export default QuizItem

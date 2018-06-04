import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from './Button'
import SolidButton from './SolidButton'
import colors from '../utils/colors'

class QuizResults extends React.Component {
  render() {
    const { correctAnswers, incorrectAnswers, onRestart, onBack, navigation, } = this.props
    const score = Math.round(correctAnswers / (correctAnswers+incorrectAnswers) * 100.0)
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Your score is:
        </Text>
        <Text style={[styles.score, score >= 75 ? styles.goodScore : styles.badScore]}>
          {score}%
        </Text>
        <Text style={styles.subtitle}>
          Correct: {correctAnswers} | Incorrect: {incorrectAnswers}
        </Text>
        <Button
          text='Back to Deck'
          additionalStyles={[styles.button]}
          onPress={onBack}
        />
        <SolidButton
          text='Restart Quiz'
          additionalStyles={[styles.button]}
          onPress={onRestart}
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
  subtitle: {
    fontSize: 20,
  },
  score: {
    fontSize: 60,
    textAlign: 'center',
  },
  goodScore: {
    color: colors.green,
  },
  badScore: {
    color: colors.red,
  },
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
})

export default QuizResults

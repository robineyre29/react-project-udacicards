import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
import { getNavigationParam } from '../utils/navigation'
import QuizItem from '../components/QuizItem'
import QuizResults from '../components/QuizResults'

class QuizContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCardIndex: 0,
      currentCardSide: 'question',
      correctAnswers: 0,
      incorrectAnswers: 0,
    }
  }

  static navigationOptions({ navigation }) {
    return {
      title: 'Quiz',
    }
  }

  isCompleted = () => {
    const { currentCardIndex } = this.state
    const { deck } = this.props
    const isCompleted = currentCardIndex === deck.questions.length
    if (isCompleted) {
      clearLocalNotification()
      setLocalNotification()
    }
    return isCompleted
  }

  handleFlip = () => {
    this.setState((prevState, props) => ({
      currentCardSide: prevState.currentCardSide === 'question' ? 'answer' : 'question',
    }))
  }

  handleCorrect = () => {
    this.setState((prevState, props) => ({
      currentCardSide: 'question',
      correctAnswers: prevState.correctAnswers + 1,
      currentCardIndex: prevState.currentCardIndex + 1,
    }))
  }

  handleIncorrect = () => {
    this.setState((prevState, props) => ({
      currentCardSide: 'question',
      incorrectAnswers: prevState.incorrectAnswers + 1,
      currentCardIndex: prevState.currentCardIndex + 1,
    }))
  }

  handleRestart = () => {
    this.setState({
      currentCardIndex: 0,
      currentCardSide: 'question',
      correctAnswers: 0,
      incorrectAnswers: 0,
    })
  }

  handleBack = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: null}))
  }

  render() {
    const { deck, navigation } = this.props
    const { questions } = deck
    if (!this.isCompleted()) {
      return (
        <QuizItem
          onFlip={this.handleFlip}
          onCorrect={this.handleCorrect}
          onIncorrect={this.handleIncorrect}
          questions={questions}
          {...this.state}
        />
      )
    }
    return (
      <QuizResults
        onRestart={this.handleRestart}
        onBack={this.handleBack}
        navigation={navigation}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = (decks, {navigation}) => {
  const title = getNavigationParam(navigation, 'title')
  return {
    deck: title !== null ? decks[title] : {},
    navigation,
  }
}

export default connect(mapStateToProps)(QuizContainer)

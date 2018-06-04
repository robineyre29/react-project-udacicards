import React from 'react'
import { Alert } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { getNavigationParam } from '../utils/navigation'
import { addCard } from '../actions'
import AddCard from '../components/AddCard'

class AddCardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
  }

  static navigationOptions({ navigation }) {
    return {
      title: 'Add Card',
    }
  }

  handleSubmit = async () => {
    const { question, answer } = this.state
    const { title, addCard, navigation } = this.props

    addCard(title, question, answer)
    this.setState({
      question: '',
      answer: '',
    })
    navigation.dispatch(NavigationActions.back({key: null}))
  }

  handleQuestionChange = (question) => {
    this.setState({question})
  }

  handleAnswerChange = (answer) => {
    this.setState({answer})
  }

  render() {
    return (
      <AddCard
        onSubmit={this.handleSubmit}
        onQuestionChange={this.handleQuestionChange}
        onAnswerChange={this.handleAnswerChange}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = (decks, {navigation}) => {
  const title = getNavigationParam(navigation, 'title')
  return {
    title,
    navigation,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCard,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardContainer)

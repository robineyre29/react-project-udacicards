import React from 'react'
import { Alert } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'
import AddDeck from '../components/AddDeck'

class AddDeckContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  handleSubmit = () => {
    const { title } = this.state
    const { decks, addDeck } = this.props

    if (title in decks) {
      Alert.alert(
        'Error',
        'A deck with this title already exists!',
      )
    }
    else {
      addDeck(title)
      this.setState({
        title: '',
      })
      this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
    }
  }

  handleTitleChange = (title) => {
    this.setState({title})
  }

  render() {
    return (
      <AddDeck
        onSubmit={this.handleSubmit}
        onTitleChange={this.handleTitleChange}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = (decks) => ({
  decks,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDeck,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeckContainer)

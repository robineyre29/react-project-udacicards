import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import DeckList from '../components/DeckList'

class DeckListContainer extends React.Component {
  componentDidMount() {
    this.props.getDecks()
  }

  render() {
    return (
      <DeckList {...this.props} />
    )
  }
}

const mapStateToProps = (decks, {navigation}) => {
  return {
    decks: Object.keys(decks).map(key => decks[key]),
    navigation,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getDecks,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListContainer)

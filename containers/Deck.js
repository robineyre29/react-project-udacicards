import React from 'react'
import { connect } from 'react-redux'
import { getNavigationParam } from '../utils/navigation'
import Deck from '../components/Deck'

class DeckContainer extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      title: getNavigationParam(navigation, 'title'),
    }
  }

  render() {
    return (
      <Deck {...this.props} />
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

export default connect(mapStateToProps)(DeckContainer)

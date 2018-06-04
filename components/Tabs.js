import React from 'react'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import colors from '../utils/colors'
import DeckList from '../containers/DeckList'
import AddDeck from '../containers/AddDeck'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name='cards'
          size={26}
          style={{color: tintColor }}
        />
      ),
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name='ios-add-circle'
          size={26}
          style={{color: tintColor }}
        />
      ),
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: colors.blue,
    inactiveTintColor: colors.darkGray,
    style: {
      backgroundColor: colors.white,
      height: 56,
    },
  },

});

export default Tabs;

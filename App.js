import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import configureStore from './configureStore'
import MainNavigator from './components/MainNavigator'
import StatusBar from './components/StatusBar'
import { setLocalNotification, getNotificationPermission, listenForNotifications } from './utils/notifications'
import colors from './utils/colors'

class App extends React.Component {
  componentDidMount() {
    getNotificationPermission()
    listenForNotifications()
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={colors.white} />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

export default App

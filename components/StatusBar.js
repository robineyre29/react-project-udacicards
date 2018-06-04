import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

function CustomStatusBar({backgroundColor, barStyle='dark-content', ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle={barStyle} backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default CustomStatusBar

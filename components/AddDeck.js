import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import SolidButton from './SolidButton'
import colors from '../utils/colors'

class AddDeck extends React.Component {
  render() {
    const { title, onTitleChange, onSubmit } = this.props
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter title'
          value={title}
          onChangeText={onTitleChange}
          ref={(input) => { this.titleInput = input }}
        />
        <SolidButton
          onPress={() => {
            this.titleInput.blur()
            onSubmit()
          }}
          disabled={title === ''}
          text='Submit'
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
  title: {
    fontSize: 28,
    color: colors.darkGray,
    textAlign: 'center',
  },
  input: {
    height: 60,
    width: '90%',
    marginTop: 20,
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: 20,
  },
})

export default AddDeck

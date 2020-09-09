import React, { FC, ReactElement, useCallback, useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const SearchScreen: FC = (): ReactElement => {
  const navigator = useNavigation()
  const [searchValue, setSearchValue] = useState('')
  const onButtonPressCallback = useCallback(() => {
    const urlPath = `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`
    console.log(encodeURIComponent(searchValue))
    navigator.navigate('WebViewScreen', { urlPath })
  }, [searchValue])

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) => setSearchValue(text)} style={styles.textInput} />
      <Button title="Find" onPress={onButtonPressCallback} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  textInput: {
    color: 'green',
  },
})

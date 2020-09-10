import React, { FC, ReactElement, useCallback, useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { logger } from 'react-native-logs'

const log = logger.createLogger()
log.setSeverity('debug')

export const SearchScreen: FC = (): ReactElement => {
  const navigator = useNavigation()
  const [searchValue, setSearchValue] = useState('')
  const onButtonPressCallback = useCallback(() => {
    const urlPath = `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`
    log['info'](encodeURIComponent(searchValue))
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
    flexDirection: 'column',
  },
  textInput: {
    color: 'green',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 6,
    borderColor: 'grey',
  },
})

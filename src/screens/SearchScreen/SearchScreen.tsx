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
      <View style={styles.childContainer}>
        <TextInput onChangeText={(text) => setSearchValue(text)} style={styles.textInput} />
        <Button title="Find" onPress={onButtonPressCallback} />
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    height: '100%',
    backgroundColor: '#b34d4d',
    justifyContent: 'center'
    
    // marginTop: 300,
  },
  childContainer: {
    marginHorizontal: 4,
    flexDirection: 'column',
  },
  textInput: {
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 6,
    borderColor: 'grey',
    backgroundColor: 'white'
  },

})

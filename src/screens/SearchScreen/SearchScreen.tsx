import React, { FC, ReactElement, useCallback, useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { logger } from 'react-native-logs'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

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
        <TouchableOpacity
          onPress={onButtonPressCallback}
          activeOpacity={0.6}
          style={styles.button}
        >
            <View>
              <Text style={styles.customBtnText}>Search</Text>
            </View>
      </TouchableOpacity>
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
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  textInput: {
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 6,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: '80%'
  }, 
  button: {
    flex: 0,
    backgroundColor: '#262626', 
  
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginVertical: 4,
    marginHorizontal: 5,
    borderRadius: 2,
    maxWidth: 120,
    minWidth: 90,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnText: {
    fontSize: 13,
    color: '#fff',
  },

})


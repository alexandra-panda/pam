/**
 * React Native App
 * https://github.com/facebook/react-native
 */

import React, { ReactElement, Fragment, FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'

import { routes } from '@/routes/routes'
import { Header } from '@/components/header'
// import { ProgresBar } from '@/components/ProgressBar'

const Stack = createStackNavigator()

const App: FC = (): ReactElement => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}

      <Stack.Navigator>
        {Object.keys(routes).map((key) => (
          <Stack.Screen
            key={key}
            name={key}
            component={routes[key].component}
            options={({ navigation, route }) => ({
              // eslint-disable-next-line react/display-name
              header: (props) => <Header {...props} />,
              animationEnabled: true,
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#e0e0e0',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#313131',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#313131',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App

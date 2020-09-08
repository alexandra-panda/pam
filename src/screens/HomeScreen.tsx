import React, { Component, ReactElement, PropsWithChildren } from 'react'
import { View, Text } from 'react-native'

export default class HomeScreen extends Component<PropsWithChildren<unknown>> {
  render(): ReactElement {
    return (
      <View>
        <Text>Home screen</Text>
      </View>
    )
  }
}

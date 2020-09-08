import React, { Component, ReactElement, PropsWithChildren } from 'react'
import { View, Text } from 'react-native'

export default class AboutScreen extends Component<PropsWithChildren<unknown>> {
  render(): ReactElement {
    return (
      <View>
        <Text>About screen</Text>
      </View>
    )
  }
}

import React, { Component, ReactElement } from 'react'
import { View, Text } from 'react-native'
import { Hello2 } from '@/Hello2'

export default class Hello extends Component {
  render(): ReactElement {
    return (
      <View>
        <Text>Hello component!!!</Text>
        <Hello2 />
      </View>
    )
  }
}

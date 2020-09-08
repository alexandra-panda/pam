import React, { FC, ReactElement } from 'react'
import { View, Text } from 'react-native'

export const Hello2: FC<unknown> = (): ReactElement => {
  return (
    <View>
      <Text>Hello2 FC component</Text>
    </View>
  )
}

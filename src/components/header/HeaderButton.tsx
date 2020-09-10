import React, { FC, ReactElement } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'

type HeaderButtonPropType = {
  title: string
  onClickHandler: (e: GestureResponderEvent, routeName: string) => void
  routeDir: string
}

export const HeaderButton: FC<HeaderButtonPropType> = (props): ReactElement => {
  return (
    <TouchableOpacity
      onPress={(e) => props.onClickHandler(e, props.routeDir)}
      activeOpacity={0.7}
      style={styles.headerButton}
    >
      <View>
        <Text style={styles.customBtnText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  headerButton: {
    flex: 0,
    backgroundColor: '#7a9ea3',
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginVertical: 4,
    marginHorizontal: 5,
    borderRadius: 2,
    maxWidth: 90,
    minWidth: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnText: {
    fontSize: 13,
    color: '#fff',
  },
})

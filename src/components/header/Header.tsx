import React, { FC, ReactElement } from 'react'
import { StatusBar, StyleSheet, ScrollView, GestureResponderEvent, View, Dimensions} from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'

import { HeaderButton } from '@/components/header/HeaderButton'

import { routes } from '@/routes/routes'

type HeaderPropsType = StackHeaderProps

export const Header: FC<HeaderPropsType> = ({ navigation }): ReactElement => {
  const buttonOnClickFunc = function (e: GestureResponderEvent, routeName: string) {
    navigation.navigate(routeName)
  }

  return (
    <ScrollView 
      horizontal={false}
      style={styles.scrollWrapper}
    >
      <StatusBar hidden={true} />

     <View style={styles.stiluri}>
     {Object.keys(routes)
        .filter((key) => routes[key].isHeaderButton)
        .map((key) => (
          <HeaderButton key={key} routeDir={key} title={routes[key].name} onClickHandler={buttonOnClickFunc} />
        ))}
        
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollWrapper: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    flexWrap: 'wrap',   
    height: 70,
    
  },
 
  stiluri: { 

  flexDirection: 'row', 
  marginTop: 10,
  width: Dimensions.get('screen').width,
  justifyContent: 'center'


  }
})

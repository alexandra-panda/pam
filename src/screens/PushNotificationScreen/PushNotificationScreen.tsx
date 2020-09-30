import React, { Component, ReactElement, PropsWithChildren, useCallback } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { localNotification } from '@/services/pushNotificationService'
import { ProgresBar } from '@/components/progressBar/ProgressBar'
import {
  progressBarDelayInSeconds as UPDATE_INTERVAL,
  sleepSecondsBeforePushNotification as TOTAL_SECONDS,
} from './constants.json'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

type PushNotificationScreenPropType = PropsWithChildren<unknown>

type PushNotificationScreenStateType = {
  animationPercents: number
}

export class PushNotificationScreen extends Component<
  PushNotificationScreenPropType,
  PushNotificationScreenStateType
> {
  animationPeriodicID: number

  constructor(props: PushNotificationScreenPropType) {
    super(props)
    this.animationPeriodicID = 0

    this.state = {
      animationPercents: 0,
    }
   
  }

  

  componentDidMount(): void {
    setTimeout(()=> {
      localNotification({ title: 'Notificare Iomaio', message: 'Eu încă mai vreau 10!' })
    },10000)
  }


  componentWillUnmount(): void {
    clearInterval(this.animationPeriodicID)
  }

  render(): ReactElement {
    return (
      <View style={styles.mainContainer}> 
      <View style={styles.textStyle}>
        <Text style={styles.textIomaio}> Bună ziua Domu Rusu!!! </Text>  
        <Text style={styles.textIomaio}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eu vreau 10 xD </Text> 
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: { 
    backgroundColor: '#b34d4d', 
    justifyContent: 'center', 
    display: 'flex', 
    alignItems: 'center',
    
  },
     textStyle: { 
        height: '100%', 
        marginTop: '160%',  
     

     }, 
  textIomaio: { 
 color: 'white', 
 fontSize: 30
  }  ,  

})

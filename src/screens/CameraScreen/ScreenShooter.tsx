import React, { Component, ReactElement, Fragment, PropsWithChildren } from 'react'
import { RNCamera } from 'react-native-camera'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { logger } from 'react-native-logs'

type ScreenShooterPropType = {
  onScreenSnapCallback: (base64RawImage: string) => void
}

type ScreenShooterStateType = {
  isFrontCamera: boolean
}

const log = logger.createLogger()
log.setSeverity('debug')

export default class ScreenShooter extends Component<
  ScreenShooterPropType,
  ScreenShooterStateType
> {
  private camera: any

  constructor(props: ScreenShooterPropType) {
    super(props)
    this.state = {
      isFrontCamera: true,
    }

    this.takePicture = this.takePicture.bind(this)
  }

  takePicture = async (): Promise<void> => {
    if (this.camera) {
      const options = {
        quality: 0.6,
        base64: true,
      }

      try {
        const data = await this.camera.takePictureAsync(options)
        log['info'](`take picture worked with success!!!`)
        log['debug'](`Image Base64 len = ${data.base64.length}`)

        this.props.onScreenSnapCallback(data.base64)
      } catch (error) {
        log['warn'](error)
        Alert.alert('Error', 'Screen capture error!!!')
      }
    }
  }

  render(): ReactElement {
    return (
      <Fragment>
        <RNCamera
          ref={(ref) => {
            this.camera = ref
          }}
          style={styles.preview}
          type={
            this.state.isFrontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
          }
          flashMode={RNCamera.Constants.FlashMode.off}
        ></RNCamera>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', backgroundColor: '#b34d4d', alignItems: 'center', right: 20 }}>
            <Text style ={styles.text}>&nbsp;&nbsp;&nbsp;&nbsp;Front camera:</Text>
            <CheckBox
              value={this.state.isFrontCamera}
              disabled={this.state.isFrontCamera}
              onValueChange={() => {
                this.setState({ isFrontCamera: true })
              }}
            />
          </View>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style ={styles.text}>Snap {this.state.isFrontCamera ? 'Front' : 'Back'}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', backgroundColor: '#b34d4d', alignItems: 'center', left: 20 }}>
            <Text style ={styles.text}>&nbsp;&nbsp;&nbsp;&nbsp;Back camera:</Text>
            <CheckBox
              value={!this.state.isFrontCamera}
              disabled={!this.state.isFrontCamera}
              onValueChange={() => {
                this.setState({ isFrontCamera: false })
              }}
            />
          </View>
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center', 
    backgroundColor: '#262626', 
    height: 50, 
    
  },
  capture: {
    flex: 0,
    backgroundColor: '#b34d4d',
    borderRadius: 5,
    padding: 6,
    alignSelf: 'center',
   
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }, 
 text: { 
   color: 'white',
 }
})

import React, { Component, PropsWithChildren, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { PhotoResult } from './PhotoResult'
import ScreenShooterComponent from './ScreenShooter'
// import RNFetchBlob from 'rn-fetch-blob'

import { logger } from 'react-native-logs'

const log = logger.createLogger()
log.setSeverity('debug')

type CameraScreenPropType = PropsWithChildren<unknown>

type CameraScreenStateType = {
  b64Img: string
  imageIsShowed: boolean
}

export class CameraScreen extends Component<CameraScreenPropType, CameraScreenStateType> {
  constructor(props: CameraScreenPropType) {
    super(props)

    this.state = {
      b64Img: '',
      imageIsShowed: false,
    }

    this.onScreenSnapCallback = this.onScreenSnapCallback.bind(this)
  }

  onScreenSnapCallback(base64RawImage: string): void {
    this.setState({ b64Img: base64RawImage, imageIsShowed: true })
    log['debug']('onScreenSnapCallback isCalled')
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        {this.state.imageIsShowed ? (
          <PhotoResult
            base64ImageRaw={this.state.b64Img}
            newPhotoButtonClickCallback={() => {
              this.setState({ imageIsShowed: false })
            }}
          />
        ) : (
          <ScreenShooterComponent onScreenSnapCallback={this.onScreenSnapCallback} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black', 
  },
})

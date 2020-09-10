import React, { ReactElement, FC } from 'react'
import { View, Button, Image, StyleSheet } from 'react-native'

type PhotoResultPropType = {
  newPhotoButtonClickCallback: () => void
  base64ImageRaw: string
}

export const PhotoResult: FC<PhotoResultPropType> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photoResult}
        source={{ uri: `data:image/gif;base64,${props.base64ImageRaw}` }}
      />
      <Button title="New photo" onPress={props.newPhotoButtonClickCallback} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoResult: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})

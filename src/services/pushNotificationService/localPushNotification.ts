import PushNotification, { PushNotificationObject } from 'react-native-push-notification'

export function localNotification(options: PushNotificationObject): void {
  PushNotification.localNotification(options)
}

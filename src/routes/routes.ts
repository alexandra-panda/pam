import { ComponentClass, FunctionComponent } from 'react'

import { SearchScreen } from '@/screens/SearchScreen'
import { PushNotificationScreen } from '@/screens/PushNotificationScreen'
import { WebViewScreen } from '@/screens/WebViewScreen'
import { CameraScreen } from '@/screens/CameraScreen'

type CustomRouteType = {
  [prop: string]: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentClass<any, any> | FunctionComponent<any>
    isHeaderButton: boolean
    name:string
  }
}

export const routes: CustomRouteType = {
  PushNotificationScreen: {
    component: PushNotificationScreen,
    isHeaderButton: true,
    name: 'Home'
  },
  SearchScreen: {
    component: SearchScreen,
    isHeaderButton: true,
    name: 'Search'
  },
  CameraScreen: {
    component: CameraScreen,
    isHeaderButton: true,
    name: 'Camera'
  },
  WebViewScreen: {
    component: WebViewScreen,
    isHeaderButton: false,
    name: ''
  },
}

export const initialRoute = routes['HomeScreen'] || routes[Object.keys(routes)[0]]

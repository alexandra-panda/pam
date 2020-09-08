import { ComponentClass, FunctionComponent } from 'react'

import HomeScreen from '@/screens/HomeScreen'
import AboutScreen from '@/screens/AboutScreen'

type CustomRouteType = {
  [prop: string]: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentClass<any, any> | FunctionComponent<any>
    isHeaderButton: boolean
  }
}

export const routes: CustomRouteType = {
  HomeScreen: {
    component: HomeScreen,
    isHeaderButton: true,
  },
  AboutScreen: {
    component: AboutScreen,
    isHeaderButton: true,
  },
}

export const initialRoute = routes['HomeScreen'] || routes[Object.keys(routes)[0]]

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { HeaderButton, HeaderButtonPropType } from '@/components/header/HeaderButton'

describe('Header Button test case', () => {
  test('Header Button renders correctly', () => {
    const options: HeaderButtonPropType = {
      onClickHandler: jest.fn(),
      title: 'abcde',
      routeDir: 'aaa',
    }
    renderer.create(React.createElement(HeaderButton, options, null))
  })
})

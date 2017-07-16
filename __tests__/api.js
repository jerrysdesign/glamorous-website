import React from 'react'
import {mount} from 'enzyme'
import {matcher, serializer} from 'jest-glamor-react'
import Api from '../pages/api'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

global.docsearch = jest.fn(() => {})

test('renders', () => {
  expect(() => mount(<Api />)).not.toThrow()
})

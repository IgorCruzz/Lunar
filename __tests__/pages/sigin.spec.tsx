import 'babel-polyfill'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../../src/pages'
import React from 'react'

it('should be render', () => {
  expect(render(<Home />)).toBeDefined()
})

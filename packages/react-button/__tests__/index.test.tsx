import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../src'

test('it works', () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'
import { Alert } from '../src'

test('it works', () => {
  const { container } = render(<Alert kind="positive">My message</Alert>)
  expect(container.firstChild).toMatchSnapshot()
})

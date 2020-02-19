import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

test('it works', () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toMatchSnapshot()
})

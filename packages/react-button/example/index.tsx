import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import { Button } from '../src'

const App = () => (
  <ThemeProvider theme={theme}>
    <Button kind="primary" scale="normal" outline={false}>
      Click me
    </Button>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import { Alert } from '../src'

const App = () => (
  <ThemeProvider theme={theme}>
    <Alert kind="positive">Hello world!</Alert>
    <br />
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

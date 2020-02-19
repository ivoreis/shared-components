import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import axe from 'react-axe'
import theme from './theme'

import { Alert } from '../src'

const App = () => (
  <ThemeProvider theme={theme}>
    <main style={{ padding: '25px' }}>
      <h1>Example</h1>
      <Alert kind="positive">Hello world!</Alert>
      <br />
    </main>
  </ThemeProvider>
)

axe(React, ReactDOM, 1000)
ReactDOM.render(<App />, document.getElementById('root'))

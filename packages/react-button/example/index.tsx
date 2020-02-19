import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import axe from 'react-axe'
import theme from './theme'

import { Button } from '../src'

const App = () => (
  <ThemeProvider theme={theme}>
    <main style={{ padding: '25px' }}>
      <h1>Example</h1>
      <Button kind="secondary" scale="normal" outline={false}>
        Click me
      </Button>
      <br />
      <Button kind="primary" scale="normal" outline>
        Click me
      </Button>
      <Button kind="primary" scale="large" outline>
        Click me
      </Button>
      <br />
    </main>
  </ThemeProvider>
)

axe(React, ReactDOM, 1000)
ReactDOM.render(<App />, document.getElementById('root'))

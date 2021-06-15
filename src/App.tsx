import React from 'react'
import { IntlProvider } from 'react-intl'
import { Route, Switch } from 'react-router-dom'
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'

import AppLayout from './shared/layout/Layout'
import Authentication from './shared/module/Authentication/Authentication'
import PublicRoute from './shared/widgets/PublicRoute'
import data from './shared/module/translations'
import UseStateNewExample from './components/UseState/UseStateNewExample'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bodyBackground: string
      primary: string
      primaryLight: string
      primaryExtraLight: string
      error: string
      secondary: string
      white: string
      light: string
      extraLight: string
      extraDark: string
      dark: string
      darkLight: string
      blue: string
      red: string
    }
    paddingUnit: number

    footerHeight: number
    headerHeight: number
  }
}

const theme: DefaultTheme = {
  colors: {
    bodyBackground: '#f2f2f2',
    primary: '#51B148',
    primaryLight: 'rgba(0, 158, 15, 0.85)',
    primaryExtraLight: 'rgba(0, 158, 15, 0.25)',
    error: '#f44336',
    secondary: '#2660a4',
    white: '#fff',
    light: 'rgba(255, 255, 255, 0.65)',
    extraLight: 'rgba(255, 255, 255, 0.85)',
    extraDark: 'rgba(0, 0, 0, 0.85)',
    dark: 'rgba(0, 0, 0, 0.65)',
    darkLight: 'rgba(0, 0, 0, 0.25)',
    blue: '#2B78E4',
    red: '#CF2A27',
  },
  paddingUnit: 8,

  footerHeight: 64,
  headerHeight: 48,
}

const GlobalStyle = createGlobalStyle`


#root {
  width: 100%;
  height: 100%;
 
}
`

const App = () => {
  return (
    <IntlProvider locale="fr" messages={data.fr}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <PublicRoute path="/auth" component={Authentication} />
          <Route component={AppLayout} />
        </Switch>
        )
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App

import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from './shared/widgets/PrivateRoute'
import PublicRoute from './shared/widgets/PublicRoute'
import AppLayout from './shared/layout/Layout'
import Authentication from './model/Authentication/Authentication'

const App = () => {
  return (
    <Switch>
      <PublicRoute path="/auth" component={Authentication} />
      <PrivateRoute component={AppLayout} />
    </Switch>
  )
}

export default App

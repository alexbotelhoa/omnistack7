import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed/index'
import New from './pages/New/index'

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={Feed} />
         <Route path="/new" component={New} />
      </Switch>
   )
}
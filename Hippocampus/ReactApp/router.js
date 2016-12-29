'use strict';

import React, {Component} from 'react'
import { Scene, Router } from 'react-native-router-flux'
import SignInPage from './components/signInPage/index'
import Feed from './components/feeds/index'

export default class RouterComponent extends Component {
  render(){
    return (
      <Router sceneStyle={{paddingTop: 65}}>
        <Scene key="signInPage" component={SignInPage} title="Sign in"/>
        <Scene key="feed" component={Feed} title="Feed" initial/>
      </Router>
    )
  }
}

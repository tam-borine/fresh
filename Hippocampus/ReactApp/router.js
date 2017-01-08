'use strict';

import React, {Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import SignInPage from './components/signInPage/index'
import Feed from './components/feeds/index'
import AddPost from './components/feeds/addPost'
import CreateCaseForm from './components/cases/createCaseForm'

export default class RouterComponent extends Component {
  render(){
    return (
      <Router sceneStyle={{paddingTop: 65}}>
          <Scene key="signInPage" component={SignInPage} title="Sign in"/>
          <Scene
            onRight={() => {Actions.addPost()}}
            rightTitle="Add"
            key="feed"
            component={Feed}
            title="Feed"
            initial
          />
          <Scene key="addPost" component={AddPost} title="Add post" />
          <Scene
            onLeft={() => {console.log("Back button")}}
            leftTitle="Back"
            key="createCaseForm"
            component={CreateCaseForm}
            title="Create Case form"
          />
      </Router>
    )
  }
}

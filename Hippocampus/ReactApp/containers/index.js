
'use strict';


/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
	Navigator,
	StatusBar,
	Text,
	View,
	Button
} from 'react-native'

// var auth = require('../oauth.js')
// import Anonymous from '../anon'
// import EmailLogin from '../email'
// import Example from '../linkedIn.js'
// import SignInPage from '../components/signInPage/index'
import RouterComponent from '../router'
import Feed from '../components/feeds/index'
import Test from '../components/sidemenu/index'
import NavigationBar from 'react-native-navbar'
import SideMenu from 'react-native-side-menu'

export default class AppContainer extends Component {
	render () {
		return (
			<RouterComponent/>
			);
	}
}

//			<Anonymous title="Agnostic Trigger Button" onPress={() => fir.testingFirebase()}>Click me to test</Anonymous>


// ref.writePost('My awesome post', 'some ranting about doctors lives')
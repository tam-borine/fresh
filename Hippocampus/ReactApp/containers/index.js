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

var auth = require('../oauth.js')

console.log("anyone here by now")

import NavigationBar from 'react-native-navbar'
import SideMenu from 'react-native-side-menu'

export default class AppContainer extends Component {
	render () {
		return (
			<Button title="Sign In Button" onPress={() => auth.authenticateViaGoogle()}>Click me to sign in</Button>
			
			);
	}
}

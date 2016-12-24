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
import Anonymous from '../anon'

import NavigationBar from 'react-native-navbar'
import SideMenu from 'react-native-side-menu'

export default class AppContainer extends Component {
	render () {
		return (
			<Anonymous title="Agnostic Trigger Button" onPress={() => fir.testingFirebase()}>Click me to test</Anonymous>
			);
	}
}

console.log("we made it thusfar")

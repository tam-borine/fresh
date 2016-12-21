'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  InteractionManager,
} from 'react-native'
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render = {} => {
		return(
			<Text>Hello from Home</Text>
			);
	}
}

export default Home
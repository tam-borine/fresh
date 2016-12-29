'use strict';

import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Test extends Component {
	render(){
		var {height, width} = Dimensions.get('window');
		return(
				<Icon.Button
					name="bars"
					color="red"
					onPress={ () => {console.log("a hamburger callback working") }}>
				</Icon.Button>
			)
	}
}


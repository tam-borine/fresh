'use strict';

import React, {Component} from 'react'
import {
	View,
	Text,
	Dimensions
} from 'react-native'

export default class SignInHeader extends Component {
	render(){
		var {height, width} = Dimensions.get('window');
		return (
			<View style={{width: width, height: 150, backgroundColor: 'red'}}>
				<Text style={{textAlign: 'center', color: '#ffffff'}}>Hippocampus</Text>
				<Text>Making doctors' lives easier</Text>
			</View>

			)
	}
}
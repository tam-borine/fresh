'use strict';

import React, {Component} from 'react'
import {
	View,
	Text,
	Dimensions,
	Image
} from 'react-native'

export default class SignInHeader extends Component {
	render(){
		var {height, width} = Dimensions.get('window');
		return (
			<View style={{width: width, height: 150, backgroundColor: 'red'}}>
				<Text/>
				<Text/>
				<Image
				    style={{width: 110, height: 75}}
				    alignSelf='center'
				    source={require('./images/logo_white.png')}
				/>
				<Text style={{textAlign: 'center', color: '#ffffff', fontSize: 20}}>Hippocampus</Text>
				<Text style={{textAlign: 'center', color: '#ffffff'}}>Making doctors' lives easier</Text>
			</View>

			)
	}
}
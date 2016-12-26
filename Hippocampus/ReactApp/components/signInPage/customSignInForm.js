'use strict';

import React, {Component} from 'react'
import {
	View,
	Button
} from 'react-native'

export default class CustomSignInForm extends Component{

	render(){
		return(
			<View>
				<Button
					onPress={f()=> {console.log"hi"}}
					title="Sign Up"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
			)
	}
}

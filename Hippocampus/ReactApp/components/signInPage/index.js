'use strict';

import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'

class SignInPage extends Component {
	render(){
		return(
			<View>
				<Header/>
				<ProviderLogins/>
				<Text>{"-or-"}</Text>
				<CustomSignInForm/>
				<Text style={{color: 'red'}}
				      onPress={() => Linking.openURL('some app route')}>
				  Forgot Password?
				</Text>

				<Text style={{color: 'red'}}
				      onPress={() => Linking.openURL('some app route')}>
				  Not registered? Create a free account...
				</Text>

			</View>
			)
	}
}
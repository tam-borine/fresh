'use strict';

import React, {Component} from 'react'
import {
	View,
	Text,
	Linking
} from 'react-native'

import SignInHeader from './signInHeader'
import ProviderLogins from './providerLogins'
import CustomSignInForm from './customSignInForm'


export default class SignInPage extends Component {
	render(){
		return(
			<View>
				<SignInHeader/>
				<ProviderLogins/>
				<Text/>
				<Text style={{textAlign: 'center'}}>-or-</Text>
				<Text/>
				<CustomSignInForm/>

				<Text style={{color: 'red', textAlign: 'center'}}
				      onPress={() => Linking.openURL('some app route')}>
				  Forgot Password?
				</Text>
				<Text/>
				<Text style={{color: 'red', textAlign: 'center'}}
					onPress={() => Linking.openURL('some app route')}>
					Not registered? Create a free account...
				</Text>

			</View>
			)
	}
}




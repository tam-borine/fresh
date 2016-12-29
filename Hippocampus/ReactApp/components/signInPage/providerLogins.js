'use strict';

import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ProviderLogins extends Component {
	render(){
		return(
			<View>
				<View >
				<Text/>
					<Icon.Button
						name="facebook"
						backgroundColor="#3b5998" 
						onPress={ console.log("a login button callback working") }>
						<Text style={{fontFamily: 'Arial', fontSize: 15, color: '#ffffff'}}>Sign in with Facebook</Text>
					</Icon.Button>
				</View>
				<Text/>
				<View >
					<Icon.Button
						name="google-plus"
						backgroundColor="#FF0000"
						onPress={ console.log("a login button callback working") }>
						<Text style={{fontFamily: 'Arial', fontSize: 15, color: '#ffffff'}}>Sign in with Google</Text>
					</Icon.Button>
				</View>
				<Text/>
				<View >
					<Icon.Button
						name="linkedin"
						backgroundColor="#0059b3"
						onPress={ console.log("a login button callback working") }>
						<Text style={{fontFamily: 'Arial', fontSize: 15, color: '#ffffff'}}>Sign in with Linked In</Text>
					</Icon.Button>
				</View>
			</View>
			)
	}
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   }
// });
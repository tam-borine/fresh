'use strict';

import React, {Component} from 'react'
import {
	ScrollView,
	Button,
	Text
} from 'react-native'
import { Container, Content, InputGroup, Input } from 'native-base';


export default class CustomSignInForm extends Component{

    render() {

        return (
        	<ScrollView>
	        	<InputBox plac='email'/>
	        	<Text/>
	        	<InputBox plac='password'/>
	        	<Button
					onPress={{}}
					title="Sign Up"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
	        </ScrollView>
        );
    }

}


class InputBox extends Component {
	render() {
		return (
			<InputGroup borderType='regular' >
				<Input placeholder={this.props.plac}/>
			</InputGroup>
		)
	}
}

				
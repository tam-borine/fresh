'use strict';

import React, {Component} from 'react'
import {
	ScrollView,
	Text
} from 'react-native'
import { Container, Content, InputGroup, Input, Button } from 'native-base';


export default class CustomSignInForm extends Component{

    render() {

        return (
        	<ScrollView>
        		<Text/>
	        	<InputBox plac='email'/>
	        	<Text/>
	        	<InputBox plac='password'/>
	        	<Text/>
	        	<Button
					onPress={{}}
					style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
					Sign Up
				</Button>
				<Text/>
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

				
'use strict';
import React, {Component} from 'react';
import {
	ScrollView,
	Text
} from 'react-native'
import { Container, Content, InputGroup, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux'
import CreateCase from './caseFormSteps/createCase'
import AddHistory from './caseFormSteps/addHistory'
var firebaseHelpers = require('../../firebaseHelpers')


export default class CreateCaseForm extends Component {
	constructor(){
		super()
		this.state = {
		}
	}
	_updateTextInput = (field, data) => {
		var newData = {}
		newData[field] = data;
		this.setState(newData)
	}

  render(){
    return (
    	<ScrollView>
        <CreateCase callbackParent={(field, text) => this._updateTextInput(field, text)}/>
        <Text/>
        <Button
          onPress={() => {Actions.addHistory(this.state); firebaseHelpers._writeDataToFirebase('cases', this.state)}}
          style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
          Next
        </Button>
      </ScrollView>
    );
  }
}

// Could possibly export to a different file

export const InputBox = (props) => {
	//note: autocorrection of simulator is somehow not detected in time for callback and thus doesn't reach firebase
		return (
			<InputGroup borderType='regular' >
				<Input
          placeholder={props.plac}
          onChangeText={(text) => props.callbackParent(text) }
        />
			</InputGroup>
		)
}

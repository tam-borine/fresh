'use strict';
import React, {Component} from 'react';
import {
	ScrollView,
	View,
	Text
} from 'react-native'
import { Container, Content, InputGroup, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux'
import CreateCase from './caseFormSteps/createCase'
import AddHistory from './caseFormSteps/addHistory'
import AddTeam from './caseFormSteps/addTeam'



export default class CreateCaseForm extends Component {
	constructor(){

		super()
		this.state = {
			step: "1",
		}
	}

	componentDidMount = () => {
		this._navigate()
	}

	_updateTextInput = (field, data) => {
		var newData = {}
		newData[field] = data;
		this.setState(newData)
	}

_updateStep(nextScene) {
	this.setState({step: nextScene}, () => this._navigate())
	console.log(this.state.step);
}
//Actions.addHistory({'formData': this.state})
_navigate = () => {
	switch (this.state.step) {
		case "1":
			<CreateCase nextScene={() => this._updateStep("2")} callbackParent={(field, text) => this._updateTextInput(field, text)}/>
			return Actions.createCase();
		case "2":
			<AddHistory callbackParent={(field, text) => this._updateTextInput(field, text)}/>
			return Actions.addHistory();
		case "3":
			<AddTeam callbackParent={(field, text) => this._updateTextInput(field, text)}/>
			return Actions.addTeam();
}
	}

  render(){
		return(
			<View/>
		)
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

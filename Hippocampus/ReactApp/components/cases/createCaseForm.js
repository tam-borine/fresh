'use strict';
import React, {Component} from 'react';
import { Container, Content, InputGroup, Input } from 'native-base';
import { Actions } from 'react-native-router-flux'
import CreateCase from './caseFormSteps/createCase'
import AddHistory from './caseFormSteps/addHistory'
import AddTeam from './caseFormSteps/addTeam'

var firebaseHelpers = require('../../firebaseHelpers')

export default class CreateCaseForm extends Component {
	constructor(){
		super()
		this.state = {
			step: 1,
			dataOne: {},
			dataTwo: {},
			dataThree: {},
			data: {}
		}
	} //dataOne,Two etc. can be renamed
	_updateTextInput = (field, data, scene) => {
		var newData = {}
		var newRef = {}
		newData[field] = data
		newRef[scene] = newData
		this.setState(newRef)
		console.log(this.state.dataOne);
	} //scene can be renamed

	_handleNextScene = (step) => {
		this.setState({step: step})
	}

	_mergeData = () => {
		var data = {}
		Object.assign(data, this.state.dataOne,this.state.dataTwo,this.state.dataThree)
		console.log(this.state.dataTwo);
		this.setState(
			{data: data},
			() => {console.log(this.state.data); firebaseHelpers._writeDataToFirebase('cases', this.state.data)}
		)
	}

  render(){
		switch (this.state.step) {
			case 1:
				return <CreateCase nextScene={()=> this._handleNextScene(2)} callbackParent={(field, text) => this._updateTextInput(field, text, "dataOne")}/>
			case 2:
				return <AddHistory nextScene={()=> this._handleNextScene(3)} callbackParent={(field, text) => this._updateTextInput(field, text, "dataTwo")}/>
			case 3:
				return <AddTeam submitToFirebase={()=> this._mergeData()} callbackParent={(field, text) => this._updateTextInput(field, text, "dataThree")}/>
		}
  }
}

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

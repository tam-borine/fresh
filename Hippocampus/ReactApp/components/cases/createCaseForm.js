'use strict';
import React, {Component} from 'react';
import {
	ScrollView,
	View,
	Text,
	Alert
} from 'react-native'
import update from 'immutability-helper'; //needed to stop overwriting in setState during _updateTextInput()
import { Container, Content, InputGroup, Input, Button } from 'native-base';
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
	}

	_updateTextInput = (field, data, scene) => {
		var oldData = this.state[scene]
		var dataToAppend = {}
		var finalData = {}
		dataToAppend[field] = data
		var mergedData = update(oldData, {$merge: dataToAppend}) //we need immutability-helper, imported :(
		finalData[scene] = mergedData
		this.setState(finalData)
	} //scene can be renamed

	_handleNextScene = (step) => {
		this.setState({step: step})
	}

//check if we still need this
	_mergeData = () => {
		var data = {}
		Object.assign(data, this.state.dataOne,this.state.dataTwo,this.state.dataThree)
		console.log(this.state.dataTwo);
		this.setState(
			{data: data},
			() => {console.log(this.state.data); console.log("this.state.data merged above") ; firebaseHelpers._writeDataToFirebase('cases', this.state.data)}
		)
	}

_validateHashtag = (text) => {
	var re = /^#/
	if (text.match(re)) {
		console.log("Passed");
	} else {
		Alert.alert("You need to start case with a hashtag");
	}
}

  render(){
		switch (this.state.step) {
			case 1:
				return <CreateCase validateHashtag={(text) => this._validateHashtag(text)} nextScene={()=> this._handleNextScene(2)} callbackParent={(field, text) => this._updateTextInput(field, text, "dataOne")}/>
			case 2:
				return <AddHistory nextScene={()=> this._handleNextScene(3)} callbackParent={(field, text) => this._updateTextInput(field, text, "dataTwo")}/>
			case 3:
				return <AddTeam submitToFirebase={()=> this._mergeData()} callbackParent={(field, text) => this._updateTextInput(field, text, "dataThree")}/>
		}
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

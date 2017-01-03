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

export default class CreateCaseForm extends Component {
  render(){
    return (
    	<ScrollView>
        <CreateCase/>
        <Text/>
        <Button
          onPress={() => Actions.addHistory()}
          style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
          Next
        </Button>
      </ScrollView>
    );
  }
}

export const InputBox = (props) => {
		return (
			<InputGroup borderType='regular' >
				<Input placeholder={props.plac}/>
			</InputGroup>
		)
}

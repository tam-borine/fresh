'use strict';
import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'native-base'
import {InputBox} from '../createCaseForm'
import { Actions } from 'react-native-router-flux'


const AddHistory = (props) => {
  const fields = ['Presenting Complaint*', 'DDx','PMHx' ]
  return(
  <View>
    <View>
      <InputBox plac={fields[0]} callbackParent={(text) => props.callbackParent(fields[0],text)}/>
      <InputBox plac={fields[1]} callbackParent={(text) => props.callbackParent(fields[1],text)}/>
      <InputBox plac={fields[2]} callbackParent={(text) => props.callbackParent(fields[2],text)}/>
    </View>
    <View>
      <Button
        onPress={() => {Actions.addTeam(this.props.formData); console.log(props)}}
        style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
        Next
      </Button>
    </View>
  </View>
  )
}

export default AddHistory

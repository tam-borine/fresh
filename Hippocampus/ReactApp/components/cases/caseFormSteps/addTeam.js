'use strict';
import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'native-base'


import {InputBox} from '../createCaseForm'

const AddTeam = (props) => {
  const fields = ['Team name']
  return (
    <View>
      <InputBox plac={fields[0]} callbackParent={(text) => props.callbackParent(fields[0],text)}/>
      <Button
        onPress={() => props.submitToFirebase()}
        style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
        Submit
      </Button>
    </View>
  )
}

export default AddTeam

'use strict';
import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'native-base'

var firebaseHelpers = require('../../../firebaseHelpers')

import {InputBox} from '../createCaseForm'

const AddTeam = (props) => {
  return (
    <View>
      <InputBox plac='Team Name' callbackParent={(text) => console.log(text)}/>
      <Button
        onPress={() => {firebaseHelpers._writeDataToFirebase('cases', this.props.formData)}}
        style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
        Submit
      </Button>
    </View>
  )
}
export default AddTeam

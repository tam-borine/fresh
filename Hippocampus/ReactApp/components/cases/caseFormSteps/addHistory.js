'use strict';
import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'native-base'
import {InputBox} from '../createCaseForm'
import { Actions } from 'react-native-router-flux'


const AddHistory = () => {
  return(
  <View>
    <View>
      <InputBox plac='Presenting Complaint*'/>
      <InputBox plac='DDx'/>
      <InputBox plac='PMHx'/>
    </View>
    <View>
      <Button
        onPress={() => Actions.addTeam()}
        style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
        Next
      </Button>
    </View>
  </View>
  )
}

export default AddHistory

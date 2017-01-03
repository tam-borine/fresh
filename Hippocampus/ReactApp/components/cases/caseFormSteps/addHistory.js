'use strict';
import React from 'react'
import {View} from 'react-native'

import {InputBox} from '../createCaseForm'


const AddHistory = () => {
  return(
    <View>
    <InputBox plac='Presenting Complaint*'/>
    <InputBox plac='DDx'/>
    <InputBox plac='PMHx'/>
  </View>
  )
}

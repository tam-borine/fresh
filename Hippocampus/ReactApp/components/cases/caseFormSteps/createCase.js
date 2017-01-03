'use strict';
import React from 'react'
import {View} from 'react-native'
import {InputBox} from '../createCaseForm'

const CreateCase = () => {
  return(
    <View>
      <InputBox plac='Pt alias*'/>
      <InputBox plac='Admission date'/>
      <InputBox plac='Age*'/>
      <InputBox plac='Sex*'/>
      <InputBox plac='Ethnicity'/>
      <InputBox plac='Smoking'/>
      <InputBox plac='Alcohol/Drugs'/>
      <InputBox plac='Allergies'/>
    </View>
  )
}

export default CreateCase

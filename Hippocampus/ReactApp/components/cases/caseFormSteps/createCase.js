'use strict';
import React, { Component} from 'react'
import {View} from 'react-native'
import { Button } from 'native-base'
import { Actions } from 'react-native-router-flux'

import {InputBox} from '../createCaseForm'

const CreateCase = (props) => {
    const fields =  ['Pt alias*', 'Admission date', 'Age*', 'Sex*', 'Ethnicity', 'Smoking', 'Alcohol or Drugs', 'Allergies']
    return(
      <View>
        <View>
          <InputBox plac={fields[0]} callbackParent={(text) => props.callbackParent(fields[0],text)}/>
          <InputBox plac={fields[1]} callbackParent={(text) => props.callbackParent(fields[1],text)}/>
          <InputBox plac={fields[2]} callbackParent={(text) => props.callbackParent(fields[2],text)}/>
          <InputBox plac={fields[3]} callbackParent={(text) => props.callbackParent(fields[3],text)}/>
          <InputBox plac={fields[4]} callbackParent={(text) => props.callbackParent(fields[4],text)}/>
          <InputBox plac={fields[5]} callbackParent={(text) => props.callbackParent(fields[5],text)}/>
          <InputBox plac={fields[6]} callbackParent={(text) => props.callbackParent(fields[6],text)}/>
          <InputBox plac={fields[7]} callbackParent={(text) => props.callbackParent(fields[7],text)}/>
        </View>
        <View>
          <Button
            onPress={() => { props.nextScene()}}
            style={{backgroundColor: "#FF0000", alignSelf: 'center'}}>
            Next
          </Button>
        </View>
      </View>
    )

}


export default CreateCase

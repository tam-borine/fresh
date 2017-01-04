'use strict';
import React, { Component} from 'react'
import {View} from 'react-native'
import {InputBox} from '../createCaseForm'

const CreateCase = (props) => {
    const fields =  ['Pt alias*', 'Admission date', 'Age*', 'Sex*', 'Ethnicity', 'Smoking', 'Alcohol/Drugs', 'Allergies']
    return(
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
    )
}
export default CreateCase

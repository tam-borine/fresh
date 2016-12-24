'use strict';

import React from 'react'

import Firestack from 'react-native-firestack'

	const configurationOptions = {
  		debug: true
	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))

//firestack config ^^

import {
  View,
  Text,
  NativeModules,
  Button
} from 'react-native'


export class Anonymous extends React.Component {

  componentWillMount() {
    // const {firestack} = firestack;
  }

  loginAnonymously(evt) {
    // const {firestack} = this.props;
    firestack.auth.signInAnonymously()
      .then(u => {
        console.log('Signed in!', u);
      })
      .catch(err => {
        console.log('An error occurred', err);
      })
  }

  componentWillUnmount() {
    // const {firestack} = this.props;
  }

  render() {
    return (
          <Button title={this.props.title}
            onPress={this.loginAnonymously.bind(this)}>
              Anonymously login
          </Button>
    )
  }

}

export default Anonymous
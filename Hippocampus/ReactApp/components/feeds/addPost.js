import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Firestack from 'react-native-firestack'
	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))

export default class AddPost extends Component {

  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }

  _updateTextInput = (text) => {
		this._checkForHashtag(text)
    this.setState({textInput: text})
  }

  _makeFirebasePost = () => {

     //replace Alfie with currentUser
    firestack.database.ref().child('posts').push(
      {
      author: "Alfie",
      body: this.state.textInput,
      inappropriate: false,
      archived: false,
      bookmarked: false,
      timestamp: (new Date().getTime())
      }
      ).done((succ) => {
      Actions.pop({refresh: {}});
    }, (err) => {console.log('there was an error: '+ err)});

  }

	_checkForHashtag = (text) => {
		var re = /#/
		if (text.match(re)) {
			console.log("This has a hashtag");
		} else {
			console.log("This doesn't have a hashtag");
		}
	}



  render() {
    return (
      <View>
      <TextInput
        style={{height: 40}}
        placeholder="Add your post here!"
        onChangeText={(text) => this._updateTextInput(text)}
      />
      <Button
        onPress={() => this._makeFirebasePost()}
        title="Make a post!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    )
  }
}

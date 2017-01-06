import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
var tagHelpers = require('./tagHelpers.js')
var firebaseHelper = require('../../firebaseHelpers')

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
    this.setState({textInput: text})
  }

  _asyncHashtagCheck = () => {
		var hashtaggedWord = tagHelpers._grabHashtagIfExists(this.state.textInput)
		if (hashtaggedWord) {
			tagHelpers._searchFirebase(firestack, hashtaggedWord)
			.then((keyAndDataArray) => {
				this._addPost(keyAndDataArray)})
		} else { //post doesn't involve case so move on like nothing happened
			this._addPost(keyAndDataArray) //go and continue to make post anyway
			console.log("no hash tag in post");
		}
  }

	_addPost = (keyAndDataArray) => {
		firestack.database.ref().child('posts').push(
      {
      author: "Alfie",
      body: this.state.textInput,
      inappropriate: false,
      archived: false,
      bookmarked: false,
      timestamp: (new Date().getTime()),
      }
      ).done((succ) => {
				postPrimaryKey = succ.key
				if (keyAndDataArray){
					console.log(keyAndDataArray);
					var caseKey = keyAndDataArray[0]
					var caseData = keyAndDataArray[1]
					firebaseHelper._writeDataToFirebase("cases/" + caseKey + "/posts", {caseData})
				}
      	Actions.pop({refresh: {}});
    }, (err) => {console.log('there was an error: '+ err)});
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
        onPress={() => this._asyncHashtagCheck()}
        title="Make a post!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    )
  }
}

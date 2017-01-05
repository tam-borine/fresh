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
    this.setState({textInput: text})
		// console.log(this.state.textInput);
  }

  _makeFirebasePost = () => {
		this._grabHashtagIfExists()
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


	_grabHashtagIfExists = () => {
			var regex = /(^#|\s#)([a-z0-9]+)/gi
			const txt = this.state.textInput
			var matchesArray = txt.match(regex)
			var caseString = matchesArray[0]
			var split = caseString.split(" ")
			var finalString = split.pop()
			return finalString
	}

	// var aliasArray = this._searchFirebase()
	// this._isVirginAlias(aliasArray, userInput)

	_searchFirebase = () => {
		var aliasArray = []
		firestack.database.ref("cases").on('value', (snapshot) => {
		const data = snapshot.value
		for (k in data) {
			aliasArray.push(data[k]["Pt alias*"])
		}
	})
		return aliasArray
	}

	_isVirginAlias = (array, userInput) => {
		if(array.contains(userInput)) {
			// Go into firebase and add post id to existing case
		} else {
			// Have a pop up to make a new case
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

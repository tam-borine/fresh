import React, { Component } from 'react'
import { View, TextInput, Button, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native'
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
			modalVisible: false
    };
  }

  _updateTextInput = (text) => {
    this.setState({textInput: text})
  }

	setModalVisible = (visible) => {
		this.setState({modalVisible: visible});
	}

	handleHash = (hashtaggedWord) => {
		tagHelpers._searchFirebase(firestack, hashtaggedWord)
		.then((casePrimaryKey) => {
			if (casePrimaryKey) {
				this._addPost(casePrimaryKey)
			} else {
				this.setModalVisible(true)

			}
		}, (error) => {console.log("ERROR after searchFirebase " + error)})
	}

  _asyncHashtagCheck = () => {
		var hashtaggedWord = tagHelpers._grabHashtagIfExists(this.state.textInput)
		if (hashtaggedWord) {
			this.handleHash(hashtaggedWord)
		} else { //post doesn't involve case
			this._addPost() //continue to make post anyway
		}
  }

	_addPost = (casePrimaryKey) => {
		var foreignKeyObj = {}
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
				if (casePrimaryKey){
					foreignKeyObj[postPrimaryKey] = true
					firebaseHelper._foreignKeyUpdater("cases/" + casePrimaryKey + "/posts",foreignKeyObj)
				}
      	Actions.pop({refresh: {}});
    }, (err) => {console.log('error when adding post: '+ err)});
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
			<View style={{marginTop: 22}}>
			<Modal
				animationType={"none"}
				transparent={true}
				visible={this.state.modalVisible}
				onRequestClose={() => {alert("Modal has been closed.")}}
				>
			 <View style={modalStyles.container}>
				<View style={modalStyles.innerContainer}>
					<Text>We noticed you mentioned a case that doesn't exist yet! Would you like to add one now?</Text>
					<Button
						title='no'
						onPress={() => {
						this._addPost();
						this.setModalVisible(false)
					}}/>
					<Button
						title='yes'
						onPress={() => {
							this.setModalVisible(false)

							Actions.createCaseForm();
					}}/>
				</View>
			 </View>
			</Modal>
      </View>
		</View>
    )
  }
}


var modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
		backgroundColor: '#fff',
		padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
})

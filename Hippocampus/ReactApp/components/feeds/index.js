'use strict';

import React, {Component} from 'react'
import {
	ScrollView,
	ListView,
	Text,
	Button,
	View,
	TextInput
} from 'react-native'


export default class Feed extends Component {
	 constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: (["object","another1","third"]),
      dataSource: ds,
      textInput: "",
      newPost: null
    };
  }

    componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.data),
    })
  }

  _createPost = () => {
  	this.setState(
  	{ newPost: <Post body={this.state.textInput}/>},
  	() => this._updateListView())
  }

  _updateListView = () => {
  	console.log(this.state.newPost)
  	this.state.data.push(this.state.newPost)
  	    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.data),
    })
  }

	render(){
		// const something = "something"
		return(
			<ScrollView>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Type here to add a post!"
				onChangeText={(text) => this.setState({textInput: text})}
			/>
			<Button
				onPress={this._createPost}
				title="update list"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			</ScrollView>
			)
	}
}

class Post extends Component {
	render(){
		return(
			<Text>{this.props.body}</Text>
			)
	}
}

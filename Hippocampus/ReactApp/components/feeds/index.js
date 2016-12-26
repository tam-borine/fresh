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
      newString: ""
    };
  }

    componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.data),
    })
  }

  _updateListView = () => {
  	this.state.data.push(this.state.newString)
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
				onChangeText={(text) => this.setState({newString: text})}
			/>
			<Button
				onPress={this._updateListView}
				title="update list"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			</ScrollView>
			)
	}
}
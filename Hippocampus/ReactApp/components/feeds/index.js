'use strict';

import React, {Component} from 'react'
import {
	Navigator,
	ScrollView,
	ListView,
	Text,
	Button,
	View,
	TextInput
} from 'react-native'
import { Container, Header, InputGroup, Input, Icon, Button as BaseButton } from 'native-base';
//alias BaseButton necesary as we import two Button components and React gets confused...


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
  	() => {this._updateListView(); console.log(this.state.textInput)})
  }

  _updateListView = () => {
  	console.log(this.state.newPost)
  	this.state.data.push(this.state.newPost)
  	    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.data),
    })
  }

  _getCreatePostPage = () =>{

  }

  _updateTextInput = (text) => {
  	this.setState({textInput: text})
  }

	render(){
		return(
			<ScrollView>
			<SearchBar/>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
			<Button
				onPress={this._getCreatePostPage}
				title="create post"

			/>
			<CreatePostScene createPost={this._createPost} updateTextInput={this._updateTextInput}/>

			</ScrollView>
			)
	}
}
class SearchBar extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </InputGroup>
                    <BaseButton transparent>
                        Search
                    </BaseButton>
                </Header>
            </Container>
        );
    }
}
class Post extends Component {
	render(){
		return(
			<Text>{this.props.body}</Text>
			)
	}
}

class CreatePostScene extends Component {
	render(){
		return(
			<View>
			<TextInput
				style={{height: 40}}
				placeholder="Type here to add a post!"
				onChangeText={(text) => this.props.updateTextInput(text)}
			/>
			<Button
				onPress={() => this.props.createPost()}
				title="update list"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			</View>

		)
	}
}

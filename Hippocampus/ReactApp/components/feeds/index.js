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

import Firestack from 'react-native-firestack'
	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))
//firestack config ^^

export default class Feed extends Component {
	 constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: (["object","another1","third"]),
      dataSource: ds,
      textInput: "",
      newPost: null,
      lastPostId: null
    };
  }

    componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.data),
    })
  }

	_makeFirPost = () => {
		firestack.database.ref('posts/testPostId1').set({
			title: "i am a title",
			body: this.state.textInput,   
		});
		this._readFirPost();
	}

	_readFirPost = () => {
		var value = null
		firestack.database.ref('posts/testPostId1').on('value', (snapshot) => {
			const data = snapshot.val()
			console.log(data)
			this.setState({newPost: data.body },
				() => {this._updateListView()})
		});
	}

  _updateListView = () => {
  	this.state.data.push(this.state.newPost)
  	    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.data),
    })
  }

  _getCreatePostPage = () =>{
  	//this is invoked by a dumb button at the moment until we make a separate screen for CreatePostPage
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
				title="go to create post page"
			/>
			<CreatePostScene makeFirPost={this._makeFirPost} updateTextInput={this._updateTextInput}/> 

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
				onPress={() => this.props.makeFirPost()}
				title="make a post!"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			</View>

		)
	}
}

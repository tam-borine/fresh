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
import { Actions } from 'react-native-router-flux'
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
    };
  }

    componentDidMount(){
					console.log(this.props.text);
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.data),
    })
  }
	_makeFirebasePost = () => {
		var post = {author: "Alfie", body: this.state.textInput, inappropriate: false, archived: false, bookmarked: false} //replace Alfie with currentUser
		firestack.database.ref().child('posts').push(post).done((succ) => {
			this._readFirebasePost(succ.key);
		}, (err) => {console.log('there was an error: '+err)});
	}
//if there is time, is there a way to setState of newPost directly in the .done()callback and bypass _readFirPost
	_readFirebasePost = (key) => {
		var value = null
		firestack.database.ref('posts/'+key).on('value', (snapshot) => {
			const data = snapshot.val()
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
		// Just a test method to check routing
  }

  _updateTextInput = (text) => {
  	this.setState({textInput: text})
  }

	render(){
		return(
			<ScrollView>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
			<Button
				onPress={this._getCreatePostPage}
				title="go to create post page"
			/>
			<CreatePostScene makeFirebasePost={this._makeFirebasePost} updateTextInput={this._updateTextInput}/>
			<View>
				<Text>{this._readFirebasePost}</Text>
			</View>

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
				onPress={() => this.props.makeFirebasePost()}
				title="make a post!"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			</View>

		)
	}
}

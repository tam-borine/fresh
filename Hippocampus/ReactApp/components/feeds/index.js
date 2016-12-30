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
import Card from '../cards/card'
import CardDetail from '../cards/cardDetail'
//alias BaseButton necesary as we import two Button components and React gets confused...

import Firestack from 'react-native-firestack'
	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))
//firestack config ^^

export default class Feed extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      data: new Array(),
      key: null,
      newPost: null,
    };
  }

	// componentWillMount called when rendering on server, componentDidMount on client

  componentWillMount(){ //have added this in and weirdly it works because it occurs earlier i think
  	this.setState({
  		key: this.props.text
  	}, () => this._updateFeedFromFirebase() //callback says once you have updated state then call this method
	)
  }

	// Get back ten latest posts, for each one map and push them into data array

	_updateFeedFromFirebase = () => {
		var value = null
		firestack.database.ref('posts').on('value', (snapshot) => {
			var object = snapshot.value
			this._extractIntoArray(object)
		})
	}

	_extractIntoArray = (target) => {
		const self = this
		for (var k in target){
		var arrCopy = self.state.data.slice();
			arrCopy.push(target[k])
				self.setState({
					data: arrCopy,
				})
		}
	}


	_renderPosts = () => {
	  return this.state.data.map(post =>
			<CardDetail key={post.title} post={post}/>
		)
	}


	render(){
		return(
			<ScrollView>
				<View>
					{this._renderPosts()}
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
// class Post extends Component {
// 	render(){
// 		return(
// 			<Text>{this.props.body}</Text>
// 			)
// 	}
// }

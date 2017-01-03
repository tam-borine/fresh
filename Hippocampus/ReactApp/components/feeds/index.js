'use strict';

import React, {Component} from 'react'
import {
	Navigator,
	ScrollView,
	View,
} from 'react-native'
import { Container, Header, InputGroup, Input, Icon, Button as BaseButton } from 'native-base';
import { Actions } from 'react-native-router-flux'
import Card from '../cards/card'
import CardDetail from '../cards/cardDetail'
import {MenuContext} from 'react-native-popup-menu';
//alias BaseButton necesary as we import two Button components and React gets confused...

import Firestack from 'react-native-firestack'
	const configurationOptions = {
  		debug: true	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))
//firestack config ^^ //we need a global solution for this

export default class Feed extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      data: new Array()
    };
  }

  componentWillMount(){
  	this._updateFeedFromFirebase()
  }
	// Get back ten latest posts, for each one map and push them into data array

	_updateFeedFromFirebase = () => {
		var value = null
		firestack.database.ref('posts').orderByChild('timestamp').on('value', (snapshot) => {
			var objectOfPostObjects = snapshot.value
			this._extractIntoArray(objectOfPostObjects)
		})
	}

	_extractIntoArray = (objectOfPostObjects) => {
		var arrCopy = [];
		for (var k in objectOfPostObjects){
			arrCopy.push([k, objectOfPostObjects[k]])
		}
		arrCopy = arrCopy.sort((l,r) => {
			var left = l[1]
			var right = r[1]
			return left.timestamp < right.timestamp
		})
		this.setState({
			data: arrCopy,
		})
	}

	_renderPosts = () => {
		console.log(this.state.data);
	  return this.state.data.map(post =>
			<CardDetail key={post[0]} post={post[1]} primaryKey={post[0]}/>
		)
	}

	render(){
		return(
			<ScrollView>
				<View>
					<MenuContext>
					  {this._renderPosts()}
				  </MenuContext>
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

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
	 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: (["object","another1","third"]),
      dataSource: ds,
      key: null,
      newPost: null,
    };
  }

  componentWillMount(){ //have added this in and weirdly it doesn't update but by the next method's attempt to setState on key it works?? :S
  	this.setState({
  		key: this.props.text
  	})
  	console.log(this.state.key + "<< state.key is still null even though we just updated it")
  }

    componentDidMount(){
    this.setState({  
      dataSource:this.state.dataSource.cloneWithRows(this.state.data),
    })
    console.log(this.state.key + '<< by now the state changing has worked')
    this._readFirebasePost(this.state.key)
  }

//if there is time, is there a way to setState of newPost directly in the .done()callback and bypass _readFirPost
//children classes can't set state of parents but we can pass through props and hacve it in state here
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

	render(){
		return(
			<ScrollView>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
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

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

  componentWillMount(){ //have added this in and weirdly it works because it occurs earlier i think
  	this.setState({
  		key: this.props.text
  	}, () => this._readFirebasePost(this.state.key) //callback says once you have updated state then call this method
	)
  	console.log(this.state.key + "<< state.key is still null even though we just updated it")
  }

    componentDidMount(){ //i should research lifecycle methods
    this.setState({  
      dataSource:this.state.dataSource.cloneWithRows(this.state.data),
    })
    console.log(this.state.key + '<< by now the state changing has worked')
  }

//if there is time, is there a way to setState of newPost directly in the .done()callback and bypass _readFirPost
//...nah, you managed to get this.props.text in this class so we should be able to somehow give it to _readFirebasePost()
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
// class Post extends Component {
// 	render(){
// 		return(
// 			<Text>{this.props.body}</Text>
// 			)
// 	}
// }

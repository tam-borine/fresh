'use strict';

import React from 'react'
import {
	Text
} from 'react-native'

import Firestack from 'react-native-firestack'

	const configurationOptions = {
  		debug: true
	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))

//firestack config ^^
export default class writePost extends React.Component {
	 
	 makePost = () => {
	firestack.database.ref('posts/testPostId1').set({
    title: "i am a title",
    body: "i am a post body str",   
  });
}

	readPost = () => {
		firestack.database.ref('posts').on('value', (snapshot) => {
    const value = snapshot.val(); 
    console.log(value)    
    console.log("above")
  });

	}

	render(){
		this.makePost()
		this.readPost()
		return(
			<Text/>
			)
	}
} 


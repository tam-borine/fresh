'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Home from '../screens/home'

class Menu extends Component {
	constructor(){
		super();
		// Initial state
	    this.state = {
	      menu: [
	        {title: 'Home', component: Home},
	        {title: 'Profile', component: Home},
	        {title: 'Cases', component: Home},
	        {title: 'Tasks', component: Home},
	        {title: 'Teams', component: Home},
	        {title: 'Settings', component: Home},
	       	{title: 'Help', component: Home},

	      ],
	    };
	}

	static propTypes = {
    	navigate: React.PropTypes.func.isRequired,
  	}

  	render = () => {
    let { navigate } = this.props;
    let { menu } = this.state;

    // Build the actual Menu Items
    let menuItems = [];
    menu.map((item)=>{
      let { title, component } = item;

      menuItems.push(
        <TouchableOpacity key={'menu-item-'+title}
          onPress={()=>navigate(title, component)}>
          <View>
            <Text/>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View/>
        <View>{menuItems}</View>
      </View>
    );
  }

}
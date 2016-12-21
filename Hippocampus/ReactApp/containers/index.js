'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
	Navigator,
	StatusBar,
	Text,
	View
} from 'react-native'

console.log("anyone here by now")

import NavigationBar from 'react-native-navbar'
import SideMenu from 'react-native-side-menu'
// missing SideMenuActions - custom actions
//missing styles, config, util.
//missing Index (soonscreen), Menu and NavbarElements - custom componenets

export default class AppContainer extends Component {

	componentDidMount = () => {
		StatusBar.setHidden(false, 'slide'); // Slide in on load
    	StatusBar.setBackgroundColor("#dc143c", true); // Android Status Bar Color
	}
	_onSideMenuPress = (title, component, extraProps) => {

	}
	_onSideMenuChange = (isOpen) => {

	}
	_renderScene = (route, navigator) => {
		 // Default Navbar Title
    	let title = route.title || AppConfig.appName;

    	// Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    	let leftButton = {
      		onPress: (route.index > 0)
        		? this.refs.rootNavigator.pop
        		: this.props.toggleSideMenu,
      		icon: (route.index > 0)
        		? 'ios-arrow-back-outline'
        		: 'ios-menu-outline'
    	};
	    // Show a cross icon when transition pops from bottom
	    if(route.transition == 'FloatFromBottom')  {
	      	leftButton.icon = 'ios-close-outline';
	    }
	}
	render () {
		return (
			<Text>Hello world</Text>
			
			);
	}
}

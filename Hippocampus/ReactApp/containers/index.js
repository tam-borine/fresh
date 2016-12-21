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


import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import * as SideMenuActions from '../actions/sidemenu';
import Menu from '../components/menu';
import Helpers from '../helpers';
//missing styles, config.
//missing Index (soonscreen), Menu and NavbarElements - custom componenets

const mapStateToProps = (state) => ({
  sideMenuIsOpen: state.sideMenu.isOpen, //need to look up but think isOpen is from SideMenu not SideMenuActions
});

export default class AppContainer extends Component {

	componentDidMount = () => {
		StatusBar.setHidden(false, 'slide'); // Slide in on load
    	StatusBar.setBackgroundColor("#dc143c", true); // Android Status Bar Color
	}
	_onSideMenuPress = (title, component, extraProps) => {
		SideMenuActions.close()
		//below might be needed in future, but currently we have no extra props from Menu items coming through
		// if(Helpers.objIsEmpty(extraProps)) extraProps = {};
		this.refs.rootNavigator.replace({
			title: title,
			component: component,
			index: 0
		});
	}
	_onSideMenuChange = (isOpen) => {
		if (isOpen != state.sideMenu.isOpen) {
			SideMenuActions.toggle();
		}
	}
	_renderScene = (route, navigator) => {
		 // Default Navbar Title
    	let title = route.title || 'Hippocampus';

    	// Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    	let leftButton = {
      		onPress: (route.index > 0)
        		? this.refs.rootNavigator.pop
        		: SideMenuActions.toggle(),
      		icon: (route.index > 0)
        		? 'ios-arrow-back-outline'
        		: 'ios-menu-outline'
    	};
	    // Show a cross icon when transition pops from bottom
	    if(route.transition == 'FloatFromBottom')  {
	      	leftButton.icon = 'ios-close-outline';
	    }
		return (
	      <View>
	        <NavigationBar
	          title={<NavbarElements.Title title={title || null} />}
	          statusBar={{style: 'light-content', hidden: false}}
	          tintColor={"#dc143c"}
	          leftButton={<NavbarElements.LeftButton onPress={leftButton.onPress} icon={leftButton.icon} />} />
	        <route.component navigator={navigator} route={route}/>
	      </View>
	    );
	}
	render () {
		return (
			<SideMenu
				ref="rootSidebarMenu"
				menu={<Menu navigate={this._onSideMenuPress} ref="rootSidebarMenuMenu" />}
				disableGestures={this.props.sideMenuGesturesDisabled}
				isOpen={state.sideMenu.isOpen}
				onChange={this._onSideMenuChange}>

				<Navigator
					ref="rootNavigator"
					renderScene={this._renderScene}
					configureScene={function(route, routeStack) {
					if(route.transition == 'FloatFromBottom')
					  return Navigator.SceneConfigs.FloatFromBottom;
					else
					  return Navigator.SceneConfigs.PushFromRight;
					}}
					initialRoute={{
					component: Index,
					index: 0,
					navigator: this.refs.rootNavigator,
					// passProps: {
					//   showSplashScreen: true,
					// }
				}} />
			</SideMenu>
    	);
	}
}



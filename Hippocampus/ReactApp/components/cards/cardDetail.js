import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card'
import CardSection from './cardSection'
import Button from './cardButton'
import { Actions } from 'react-native-router-flux'
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
// var Order = require('react-native-order-children');

// <View style={{ padding: 5, flexDirection: 'row', backgroundColor: 'pink' }}>
  // <View style={{ flex: 1 }}><Text>My App</Text></View>
//style={{ flex: 1 }}  <<Menu context
  //style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'flex-end' }} <<View after TopNavigation invoked
const DropDown = () => (
    <Menu
        style={{ flex:1, flexDirection: 'column', alignItems: 'flex-end' }}
        onSelect={(value) => console.log(`User selected the number`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions >
        <MenuOption value={1}>
          <Text>One</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
        <MenuOption value={3}>
          <Text>Three</Text>
        </MenuOption>
        <MenuOption value={4}>
          <Text>Four</Text>
        </MenuOption>
        <MenuOption value={5}>
          <Text>Five</Text>
        </MenuOption>
        <MenuOption value={6}>
          <Text>Six</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
);
//optionsContainerStyle={{ zIndex: 50 }} for menuOptions prop

// Below is hard coded just for styling purposes, will need to make it flexible later
// URI is empty to just show where image will go
const CardDetail = (props) => {
const {
  thumbnailContainerStyle,
  thumbnailStyle,
  headerContentStyle,
  headerTextStyle
} = styles;
// Destructuring styles as it's used twice, can do this later with props
  return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle}
              source={{ uri: "" }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>Tam</Text>
            <Text>tam@tam</Text>
          </View>
          <DropDown/>
        </CardSection>
        <CardSection >
          <Text >{props.post.body}</Text>
        </CardSection>
      </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}

export default CardDetail;

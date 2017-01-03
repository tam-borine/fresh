import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card'
import CardSection from './cardSection'
import Button from './cardButton'
import { Actions } from 'react-native-router-flux'
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/MaterialIcons';
var firebaseHelpers = require('../../firebaseHelpers')

const DropDown = () => (
    <Menu
        style={{ flex:1, flexDirection: 'column', alignItems: 'flex-end' }}
        onSelect={(value) => console.log(`User selected the number`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions >
        <MenuOption value={1} style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon.Button
            name="bookmark"
            onPress={() => console.log("You have bookmarked this post")}
            backgroundColor='red'
            iconStyle={{marginRight: 2}}
          />
          <Text>  Bookmark</Text>
        </MenuOption>
        <MenuOption value={2} style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon.Button
            name="report"
            onPress={() => firebaseHelpers._updateEntry()}
            backgroundColor='red'
            iconStyle={{marginRight: 2}}
          />
          <Text>  Report post</Text>
        </MenuOption>
        <MenuOption value={3} style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon.Button
            name="cancel"
            onPress={() => console.log("Cancelled")}
            backgroundColor='red'
            iconStyle={{marginRight: 2}}
          />
          <Text>  Cancel</Text>
        </MenuOption>
        <MenuOption value={4} style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon.Button
            name="reply"
            onPress={() => console.log("This post has been added to your tasks")}
            backgroundColor='red'
            iconStyle={{marginRight: 2}}
          />
          <Text>  Add to Tasks</Text>
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

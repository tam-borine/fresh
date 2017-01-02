import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card'
import CardSection from './cardSection'
import Button from './cardButton'
import { Actions } from 'react-native-router-flux'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import Icon from 'react-native-vector-icons/MaterialIcons';


// <Icon.Button
//   name="facebook"
//   backgroundColor="#3b5998"
//   onPress={ console.log("a login button callback working") }>
//   <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#ffffff'}}>Sign in with Facebook</Text>
// </Icon.Button>



// <View style={{ padding: 5, flexDirection: 'row', backgroundColor: 'pink' }}>
  // <View style={{ flex: 1 }}><Text>My App</Text></View>
//style={{ flex: 1 }}  <<Menu context
  //style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'flex-end' }} <<View after TopNavigation invoked
const TopNavigation = () => (
    <Menu onSelect={(value) => alert(`User selected the number`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{ zIndex: 50 }}>
        <MenuOption value={1}>
          <Icon.Button style={styles.bookmarkIconStyle}
            name="bookmark"
            onPress={() => console.log("You have bookmarked this page")}
          />
        </MenuOption>
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
);
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
      <CardSection style={{zIndex: 1}}>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle}
            source={{ uri: "" }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Alfie Bullmore</Text>
          <Text>@makersAcademyGroup</Text>
        </View>
        <MenuContext style={{ flex:1, zIndex:6, position:'relative', flexDirection: 'column', alignItems: 'flex-end', opacity:0.99 }} >
          <TopNavigation/>
        </MenuContext>
      </CardSection>
      <CardSection style={{zIndex: 1}}>
        <Text style={{zIndex: 2}}>{props.post.body}</Text>
      </CardSection>
    </Card>
  )
}





const styles = {
  bookmarkIconStyle: {
    backgroundColor: 'red',
    width: 20,
    height: 20
  },
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

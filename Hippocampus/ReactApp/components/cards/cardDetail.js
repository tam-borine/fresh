import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card'
import CardSection from './cardSection'
import Button from './cardButton'
import { Actions } from 'react-native-router-flux'

// Below is hard coded just for styling purposes, will need to make it flexible later
// URI is empty to just show where image will go
const CardDetail = (props) => {

// Destructuring styles as it's used twice, can do this later with props

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle}
            source={{ uri: "" }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Alfie Bullmore</Text>
          <Text>@makersAcademyGroup</Text>
        </View>
      </CardSection>
      <CardSection>
        <Text>{props.post.body}</Text>
      </CardSection>
      <CardSection>
        <Button onPress={() => console.log("This will redirect to comments page")}/>
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

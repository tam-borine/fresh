import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card'
import CardSection from './cardSection'

// Below is hard coded just for styling purposes, will need to make it flexible later
// URI is empty to just show where image will go
const CardDetail = (props) => {

// Destructuring styles as it's used twice, can do this later with props

  const { thumbnailStyle, headerContentStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle}
            source={{ uri: "" }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>Alfie Bullmore</Text>
          <Text>@makersAcademyGroup</Text>
        </View>
      </CardSection>
      <CardSection>
        <Text>{props.post.body}</Text>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default CardDetail;

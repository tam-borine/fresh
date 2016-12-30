import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card'
import CardSection from './cardSection'

// Below is hard coded just for styling purposes, will need to make it flexible later
// First view box is empty now but will be filled with image
const CardDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
        </View>
        <View style={styles.headerContentStyle}>
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
  }
}

export default CardDetail;

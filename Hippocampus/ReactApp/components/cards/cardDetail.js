import React from 'react';
import { Text } from 'react-native';
import Card from './card'
import CardSection from './cardSection'

const CardDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.post.body}</Text>
      </CardSection>
    </Card>
  )
}

export default CardDetail;

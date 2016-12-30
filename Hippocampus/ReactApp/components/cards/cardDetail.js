import React from 'react';
import { Text } from 'react-native';
import Card from './card'

const CardDetail = (props) => {
  return (
    <Card>
      <Text>{props.post.body}</Text>
    </Card>
  )
}

export default CardDetail;

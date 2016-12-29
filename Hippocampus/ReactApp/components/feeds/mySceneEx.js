import React, { Component, PropTypes } from 'react';
import { View, Text, Button } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>

        <Button onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </Button>

        <Button onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </Button>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};


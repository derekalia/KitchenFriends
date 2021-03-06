import React from 'react';
import { View, Text } from 'react-native';

class Directions extends React.Component {

  renderDirections() {
    const directionStepsArr = Object.keys(this.props.directions);
    const directions = this.props.directions;
    return directionStepsArr.map((step, index) => (
      <Text key={index}> {step} {directions[step]} </Text>
    ))
  }

  render() {
    return(
      <View>
        {this.renderDirections()}
      </View>
    );
  }
}

export default Directions;
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RecipeText extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const{title, publisher, titleStyle }=this.props;
    return (
     <View style={{padding: 10}}>
        <Text style={[{fontSize: 18, color:'#303030', fontWeight:'bold'}, titleStyle]}>{title} </Text>
        <Text style={{fontSize: 14, color:'#303030'}}> {publisher} </Text>
        
     </View>
    );
  }
}

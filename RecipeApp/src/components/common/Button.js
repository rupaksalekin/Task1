import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {title, onPress}=this.props;
    return (
    <TouchableOpacity onPress={onPress} style={{alignSelf:"center", backgroundColor:"#42f4ee", padding:10, marginBottom:20, marginTop:10, borderRadius:10}}>
        <Text style={{fontWeight:"bold"}}>{title}</Text>
    </TouchableOpacity>
    );
  }
}

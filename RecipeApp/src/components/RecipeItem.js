import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Card from './common/Card';
import RecipeText from './common/RecipeText';
import Button from './common/Button';

export default class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

goToDetail = ()=>{
    const {item} = this.props;
    this.props.navigation.navigate('Details',{recipe: item} );
}

  render() {
      const {item}=this.props;
    return (
      <Card>
          <View style={{marginVertical: 10, borderRadius: 8, overflow: "hidden"}}>
        <Image source={{uri: item.image_url}} style={{height: 120, flex:1}} resizeMode="cover"/>
        <RecipeText title={item.title} publisher={item.publisher}/>
       </View>
       <Button title="View More" onPress={this.goToDetail}/>
      </Card>
    );
  }
}

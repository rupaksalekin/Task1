import React, { Component } from 'react';
import { View, Text, Image,Linking, TouchableOpacity, SafeAreaView } from 'react-native';
import RecipeText from '../components/common/RecipeText';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const recipe = this.props.navigation.getParam('recipe','');
      console.log(recipe);
    return (
        <SafeAreaView>
      <View>
        <Text onPress={()=> this.props.navigation.navigate('Home')}> Details </Text>
        <Image source={{uri: recipe.image_url}} style={{height: 120, width:'100%'}} resizeMode="cover"/>
        <RecipeText title={recipe.title} publisher={recipe.publisher} titleStyle={{color:'blue', fontSize:22}}/>
        <TouchableOpacity onPress={() =>Linking.openURL(recipe.source_url)}>
         <Text>{recipe.source_url}</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

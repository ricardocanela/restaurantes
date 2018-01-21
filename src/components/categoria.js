import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import images from './imagens.js';

export default class Categoria extends Component {

  selectImage(item) {
    if (item.name === this.props.item.name) {
      return (<Image style={styles.imagem} key={item.name} source={item.img} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {images.map(item => this.selectImage(item))}
        <Text style={styles.nome} >{this.props.item.name}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  imagem: {
    height: 100,
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 15 },
    shadowOpacity: 1,
  },
  nome: {
    marginTop: -30,
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5
  },
});

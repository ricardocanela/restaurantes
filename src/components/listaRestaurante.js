import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Restaurante from './restaurante';

export default class ListaRestaurante extends Component {

  constructor(props) {
    super(props);

    this.state = { restaurantes: [] };
  }

  componentWillMount() {
    const restaurantes = require('../../restaurants.json');

    this.setState({ restaurantes: restaurantes.list });
  }

  render() {
    return (
        <View style={styles.container}>
          {this.state.restaurantes.map(item => (<Restaurante key={item.name} item={item} />))}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Categoria from './categoria';

export default class ListaCategoria extends Component {

  constructor(props) {
    super(props);

    this.state = { categorias: [] };
  }

  componentWillMount() {
    const categorias = require('../../restaurants.json');

    this.setState({ categorias: categorias.categories });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.categorias.map(item => (<Categoria key={item.name} item={item} />))}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

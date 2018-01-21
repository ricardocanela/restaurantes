import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import Topo from './src/components/topo';
import ListaCategoria from './src/components/listaCategoria';
import ListaRestaurante from './src/components/listaRestaurante';


export default class App extends Component<{}> {
  render() {
    return (
      <View>

        <Topo />

        <ScrollView horizontal>
          <ListaCategoria />
        </ScrollView >

        <ScrollView >
          <ListaRestaurante />
        </ScrollView >

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
  }
});

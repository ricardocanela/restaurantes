import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Topo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name="bars" size={30} color="#900" />
        <Text style={styles.restauranteTxt}> Restaurantes </Text>
        <Icon style={styles.icon} name="sliders" size={30} color="#900" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  restauranteTxt: {
    fontSize: 20,
    marginVertical: 20,
    color: 'white'
  },
  icon: {
    color: 'white'
  }
});

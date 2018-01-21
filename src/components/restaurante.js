import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import images from './imagens.js';

export default class Restaurante extends Component {

  selectImage(item) {
    if (item.name === this.props.item.name) {
      return (<Image style={styles.imagem} key={item.name} source={item.img} />);
    }
  }

  formatPrice(price) {
    let txtPrice = '';
    for (let i = 0; i < price; i++) {
        txtPrice = txtPrice.concat('$');
    }
    return txtPrice;
  }

  formatDistance(distance) {
    let txtDistance = '';
    if (distance < 1000) {
      txtDistance = txtDistance.concat(distance, 'm');
    } else {
      txtDistance = txtDistance.concat((distance / 1000), 'km');
    }
    return txtDistance;
  }

  formatComment(comment) {
    let txtComment = '';
    txtComment = txtComment.concat('"', comment, '"');
    return txtComment;
  }

  formatRating(rating) {
    let styleRating = styles;
    if (rating >= 9) {
      styleRating = styles.containerRating1;
    }
    if (rating >= 8 && rating < 9) {
      styleRating = styles.containerRating2;
    }
    if (rating >= 7 && rating < 8) {
      styleRating = styles.containerRating3;
    }
    if (rating < 7) {
      styleRating = styles.containerRating4;
    }
    return styleRating;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImagesInfosRating}>
          <View style={styles.containerImagesInfos}>
            {images.map(item => this.selectImage(item))}
            <View style={styles.containerInfos}>
              <Text style={styles.nome} >{this.props.item.name}</Text>
              <View style={styles.containerTypePrice}>
                <Text style={styles.tipo} >{this.props.item.type}</Text>
                <Text style={styles.preco} >{this.formatPrice(this.props.item.price) }</Text>
              </View>
              <View style={styles.containerTypePrice}>
                <Text style={styles.distancia} >
                {this.formatDistance(this.props.item.distance)}</Text>
                <Text style={styles.lugar} >{this.props.item.neigborhood}</Text>
              </View>
            </View>
          </View>
          <View style={this.formatRating(this.props.item.rating)}>
            <Text style={styles.nota} >{this.props.item.rating}</Text>
          </View>
        </View>
        <View style={styles.containerComentario}>
          <Text style={styles.comentario} >{this.formatComment(this.props.item.comment)}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderTopColor: '#E0E0E0',
  },
  containerInfos: {
    flex: 1,
  },
  containerImagesInfosRating: {
    flexDirection: 'row',
  },
  containerRating1: {
    backgroundColor: '#3CCD36',
    height: 25,
    width: 25,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRating2: {
    backgroundColor: '#93CD36',
    height: 25,
    width: 25,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRating3: {
    backgroundColor: '#CBCD36',
    height: 25,
    width: 25,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRating4: {
    backgroundColor: '#CD6136',
    height: 25,
    width: 25,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTypePrice: {
    flexDirection: 'row',
  },
  imagem: {
    height: 90,
    width: 130,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 15 },
    shadowOpacity: 1,
    margin: 5,
  },
  nome: {
    color: 'orange',
    fontSize: 20,
  },
  tipo: {
    color: '#717171',
    flex: 1,
    fontSize: 15,
  },
  distancia: {
    color: '#717171',
    flex: 1,
    fontSize: 15,
  },
  lugar: {
    color: '#717171',
    flex: 1,
    fontSize: 15,
  },
  preco: {
    color: '#717171',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 15,
  },
  containerImagesInfos: {
    flex: 1,
    flexDirection: 'row',

  },
  comentario: {
    color: '#717171',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    padding: 5,
  },
  nota: {
    color: 'white',
  }
});

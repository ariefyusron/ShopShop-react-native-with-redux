import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Text, ListItem, Card, CardItem, Left, Right, Row, Body, Col, Icon, Input, Button, Item, Spinner } from 'native-base';
import { connect } from 'react-redux';

import { all_products, show_product } from '../action';

class HomeScreen extends Component {
  
  componentDidMount() {
    this.props.dispatch(all_products())
  }

  toProduct(item) {
    this.props.dispatch(show_product(item))
    this.props.navigation.navigate('Product',{
      title:item.name
    })
  }

  static navigationOptions =({navigation}) => ({
    title:'ShopShop',
    headerRight: (
      <TouchableOpacity style={{marginRight:10}} onPress={()=>{navigation.navigate('Carts')}}>
        <Icon name='cart' />
      </TouchableOpacity>
    )
  });

  render() {

    if(this.props.products.isLoading){
      return (
        <Spinner/>
      )
    }

    if(this.props.products.isError){
      return (
        <Row style={{height:400,alignItems:'center'}}>
          <Col style={{alignItems:'center'}}>
            <Text>Network Error</Text>
          </Col>
        </Row>
      )
    }

    return (  
      <Container>
        <Content>
          <FlatList
            data={this.props.products.results}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
              ({item}) =>
                <Card style={{flex:0.5}}>
                  <TouchableOpacity onPress={()=>{this.toProduct(item)}}>
                  <CardItem cardBody>
                    <Body>
                      <Row>
                        <Image source={{uri: item.image_url}} style={{height: 150, width: 100+'%', flex: 1}} />
                      </Row>
                      <Row>
                        <Col style={{alignItems:'center'}}>
                          <Row style={{width:90+'%',marginBottom:10}}>
                            <Col>
                              <Text style={{fontSize:13}}>{item.name}</Text>
                              <Text style={{fontSize:15,color:'#c82829'}}>Rp.{item.price}</Text>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Body>
                  </CardItem>
                  </TouchableOpacity>
                </Card>
            }
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer
})

export default connect(mapStateToProps)(HomeScreen);
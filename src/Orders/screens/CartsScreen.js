import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Text, Card, CardItem, Row, Col, Icon, Button, Footer, Spinner } from 'native-base';
import { connect } from 'react-redux';

import { all_orders } from '../action';

class CartsScreen extends Component {

  componentDidMount() {
    this.props.dispatch(all_orders())
  }

  static navigationOptions = {
    title: 'Carts'
  };

  render() {

    if(this.props.orders.isLoading){
      return (
        <Spinner />
      )
    }

    if(this.props.orders.isError){
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
          {this.props.orders.results.length==0? (
            <Row style={{height:400,alignItems:'center'}}>
              <Col style={{alignItems:'center'}}>
                <Text>Empty</Text>
              </Col>
            </Row>
          ):(
            <FlatList
            data={this.props.orders.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
              ({item}) =>
                <Card>
                  <CardItem>
                    <Col style={{flex:1.3}}>
                      <Image source={{uri: item.Product.image_url}} style={{height:100,width:100}} />
                    </Col>
                    <Col style={{flex:2}}>
                      <Text>{item.Product.name}</Text>
                    </Col>
                  </CardItem>
                  <CardItem>
                    <Row>
                      <Col>
                        <Text>Qty : {item.qty}</Text>
                      </Col>
                      <Col>
                        <Text style={{textAlign:'right',color:'#c82829'}}>Rp.{item.price}</Text>
                      </Col>
                    </Row>
                  </CardItem>
                </Card>
              }
            />
          )}
        </Content>
        <Footer style={{backgroundColor:'white',height:50}}>
          <Row>
            <Col style={{justifyContent:'center'}}>
              <Text style={{alignSelf:'center'}}>Total</Text>
              <Text style={{alignSelf:'center'}}>Rp. -</Text>
            </Col>
            <Col style={{justifyContent:'center'}}>
              <Button danger style={{height:37,alignSelf:'center'}} >  
                <Text>Purchase</Text>
              </Button>
            </Col>
          </Row>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducer
})

export default connect(mapStateToProps)(CartsScreen);
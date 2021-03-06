import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Footer, Row, Col, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

import { incQty, decQty } from '../action';
import Login from '../../Auth/screens/LoginScreen';

class ConsfirmQtyScreen extends Component {

  incQty(){
    this.props.dispatch(incQty())
  }

  decQty(){
    this.props.dispatch(decQty())
  }

  addToCarts(){
    alert('add to carts')
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Detail'
    }
  };
  
  render() {

    if(!this.props.auth.token){
      return(
        <Login />
      )
    }

    return (
      <Container>
        <Content>
          <Card transparent>
              <CardItem>
                <Col style={{flex:1}}>
                  <Image source={{uri: this.props.products.data.image_url}} style={{height:150,width:150}} />
                </Col>
                <Col style={{flex:1}}>
                  <Text>{this.props.products.data.name} - Rp.{this.props.products.data.price}</Text>
                </Col>
              </CardItem>
              <CardItem>
                <Row>
                  <Col>
                    <Text>Qty</Text>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <TouchableOpacity onPress={()=>this.decQty()}>
                          <Text style={{fontSize:50,marginTop:-25}}>-</Text>
                        </TouchableOpacity>
                      </Col>
                      <Col>
                        <Text>{this.props.orders.qty}</Text>
                      </Col>
                      <Col>
                        <TouchableOpacity onPress={()=>this.incQty()}>
                          <Icon name='add' />
                        </TouchableOpacity>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardItem>
            </Card>
        </Content>
        <Footer style={{backgroundColor:'white',height:50}}>
          <Row>
            <Col style={{justifyContent:'center'}}>
              <Text style={{alignSelf:'center'}}>Total</Text>
              <Text style={{alignSelf:'center',color:'#c82829'}}>Rp.{this.props.products.data.price*this.props.orders.qty}</Text>
            </Col>
            <Col style={{justifyContent:'center'}}>
              <Button danger style={{height:37,alignSelf:'center'}} onPress={()=>this.addToCarts()} >  
                <Text>Add To Cart</Text>
              </Button>
            </Col>
          </Row>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer,
  orders: state.orderReducer,
  auth: state.authReducer
})

export default connect(mapStateToProps)(ConsfirmQtyScreen);
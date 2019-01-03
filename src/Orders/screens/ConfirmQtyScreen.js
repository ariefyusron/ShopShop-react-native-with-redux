import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Footer, Row, Col, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class ConsfirmQtyScreen extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      id: '',
      image_url: 'jjj',
      price: 0,
      totalPrice: 0,
      qty: 1
    }
  }

  incQty(){
    this.setState({
      qty: this.state.qty+1,
      totalPrice: this.state.price*(this.state.qty+1)
    })
  }

  decQty(){
    if(this.state.qty>1){
      this.setState({
        qty: this.state.qty-1,
        totalPrice: this.state.price*(this.state.qty-1)
      })
    }
  }

  addToCarts(){
    axios.post(this.url,{
      product_id: this.state.id,
      transaction_id: 1,
      qty: this.state.qty,
      price: this.state.totalPrice
    }).then(
      this.props.navigation.goBack(),
      alert('Success. '+this.state.name+' add to Carts')
    )
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Detail'
    }
  };
  
  render() {
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
                        <Text>{this.props.products.data.qty}</Text>
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
              <Text style={{alignSelf:'center',color:'#c82829'}}>Rp.{this.state.totalPrice}</Text>
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
  products: state.productReducer
})

export default connect(mapStateToProps)(ConsfirmQtyScreen);
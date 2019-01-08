import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Footer, Row, Col, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class ProductScreen extends Component {

  confirmQtyScreen() {
    this.props.navigation.navigate('ConfirmQty')
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title')
  });

  render() {
    return (
      <Container>
        <Content>
          <Card transparent>
            <CardItem>
              <Image source={{uri: this.props.products.data.image_url}} style={{height:300,flex:1}} />
            </CardItem>
            <CardItem>
              <Text>{this.props.products.data.name}</Text>
            </CardItem>
            <CardItem>
              <Text style={{color:'#c82829'}}>Rp.{this.props.products.data.price}</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{backgroundColor:'white',height:50}}>
          <Row>
            <Col>
              <Row>
                <Col style={{justifyContent:'center'}}>
                  <Button bordered dark style={{height:37,alignSelf:'flex-end'}}>
                    <Icon name='chatboxes' />
                  </Button>
                </Col>
                <Col style={{justifyContent:'center'}}>
                  <Button bordered danger style={{height:37,alignSelf:'flex-end'}}>
                    <Text>Buy</Text>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col style={{justifyContent:'center'}}>
              <Button danger style={{height:37,alignSelf:'center'}} onPress={()=>{this.confirmQtyScreen()}} >  
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

export default connect(mapStateToProps)(ProductScreen);
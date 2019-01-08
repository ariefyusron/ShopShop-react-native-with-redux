import React, { Component } from 'react';
import { Container, Content, Form, Input, Button, Text, Row, Col } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from '../components/TextInput';
import { login } from '../action';

class LoginSCreen extends Component {
  
  handleLogin = (value) => {
    this.props.dispatch(login(value));
  }

  static navigationOptions = {
    title: 'Login'
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Field
              name='username'
              component={TextInput}
              placeholder='Email or username'
            />
            <Field 
              name='password'
              component={TextInput}
              placeholder='Password'
              secureTextEntry={true}
            />
            {this.props.auth.isError? (
              <Row style={{justifyContent:'center',marginBottom:10}}>
                <Text style={{fontSize:15,color:'#c82829'}}>{this.props.auth.error}</Text>
              </Row>
            ):(null)}
            <Row style={{justifyContent:'center'}}>
              <Button danger style={{width:96+'%'}} onPress={this.props.handleSubmit(this.handleLogin)}>
                <Text>Login</Text>
              </Button>
            </Row>
          </Form>
          <Spinner
            visible={this.props.auth.isLoading}
          />
          {this.props.auth.isSuccess? (
            alert('Login success'),
            this.props.navigation.goBack()
          ):(null)}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer
})

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps)(LoginSCreen));
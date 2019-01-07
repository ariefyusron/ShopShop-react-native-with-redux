import React, { Component } from 'react';
import { Row, Input } from 'native-base';

class TextInput extends Component {
  
  render() {
    console.log(this.props)
    return (
      <Row style={{width:96+'%',alignSelf:'center'}}>
        <Input
          placeholder={this.props.placeholder}
          onChangeText={this.props.input.onChange}
          value={this.props.input.value}
          secureTextEntry={this.props.secureTextEntry || false}
        />
      </Row>
    );
  }
}

export default TextInput;
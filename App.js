import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import RootNavigator from './src/navigators/RootNavigator';

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
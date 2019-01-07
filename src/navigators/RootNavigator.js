import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../Products/screens/HomeScreen';
import ProductScreen from '../Products/screens/ProductScreen';
import CartsScreen from '../Orders/screens/CartsScreen';
import ConfirmQtyScreen from '../Orders/screens/ConfirmQtyScreen';
import LoginScreen from '../Auth/screens/LoginScreen';

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  Product: ProductScreen,
  Carts: CartsScreen,
  ConfirmQty: ConfirmQtyScreen,
  Login: LoginScreen
})

export default createAppContainer(stackNavigator);
import { combineReducers } from 'redux';

import productReducer from '../Products/reducer';
import orderReducer from '../Orders/reducer';

const reducers = combineReducers({
  productReducer,
  orderReducer
})

export default reducers;
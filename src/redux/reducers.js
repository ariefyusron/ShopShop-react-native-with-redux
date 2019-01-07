import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import productReducer from '../Products/reducer';
import orderReducer from '../Orders/reducer';
import authReducer from '../Auth/reducer';

const reducers = combineReducers({
  form: formReducer,
  productReducer,
  orderReducer,
  authReducer
})

export default reducers;
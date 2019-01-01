import axios from 'axios';

export function all_orders(){
  return {
    type: 'ALL_ORDERS',
    payload: axios.get('http://35.187.247.31/orders')
  }
}
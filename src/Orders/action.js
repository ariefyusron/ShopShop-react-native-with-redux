import axios from 'axios';

export function all_orders(){
  return {
    type: 'ALL_ORDERS',
    payload: axios.get('http://192.168.56.1:3000/orders')
  }
}

export function incQty(){
  return {
    type: 'INC_QTY',
    payload: 1
  }
}

export function decQty(){
  return {
    type: 'DEC_QTY',
    payload: 1
  }
}
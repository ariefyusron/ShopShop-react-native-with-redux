import axios from 'axios';

export function all_products(){
  return {
    type: 'ALL_PRODUCTS',
    payload: axios.get('http://35.187.247.31/products')
  }
}

export function show_product(item){
  return {
    type: 'SHOW_PRODUCT',
    payload: item
  }
}
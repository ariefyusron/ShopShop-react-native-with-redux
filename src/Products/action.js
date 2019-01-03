import axios from 'axios';

//35.187.247.31

export function all_products(){
  return {
    type: 'ALL_PRODUCTS',
    payload: axios.get('http://192.168.56.1:3000/products')
  }
}

export function show_product(item){
  return {
    type: 'SHOW_PRODUCT',
    payload: item
  }
}
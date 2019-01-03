const initialState = {
  results: [],
  data: {},
  isLoading: false,
  isError: false,
  qty: 1
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_ORDERS_PENDING':
      return {...state, isLoading: true}
    case 'ALL_ORDERS_FULFILLED':
      return {...state, isLoading:false, results:action.payload.data}
    case 'ALL_ORDERS_REJECTED':
      return {...state, isLoading:false, isError:true}
    case 'INC_QTY':
      return {...state, qty:state.qty+action.payload}
    case 'DEC_QTY':
      if(state.qty>1){
        return {...state, qty:state.qty-action.payload}
      } else{
        return {...state, qty:state.qty}
      }
    default:
      return state;
  }
};

export default orderReducer;
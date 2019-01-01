const initialState = {
  results: [],
  data: {},
  isLoading: false,
  isError: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_PENDING':
      return {...state, isLoading: true}
    case 'ALL_PRODUCTS_FULFILLED':
      return {...state, isLoading:false, results:action.payload.data}
    case 'ALL_PRODUCTS_REJECTED':
      return {...state, isLoading:false, isError:true}
    case 'SHOW_PRODUCT':
      return {...state, data:action.payload}
    default:
      return state;
  }
};

export default productReducer;
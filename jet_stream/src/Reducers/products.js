const defaultState = {
  fething: false,
  fetched: false,
  sku_urls: [],
  products: [],
  sku_error: null,
  prod_error: null
}

const productsReducer = (state=defaultState, action) => {
  const data = action.payload;
  switch (action.type) {
    case 'FETCH_PROD_SKUS_PENDING':{
      return {...state, fething:true, fetched:false}
    }
    case 'FETCH_PROD_SKUS_PENDING':{
      return {...state, fething:true, sku_urls:data.sku_urls}
    }
    case 'FETCH_PROD_SKUS_REJECTED':{
      return {...state, fething:false, fetched:false, sku_error: data.sku_error}
    }
    case 'FETCH_PROD_DATA_PENDING':{
      return {...state, fething:true}
    }
    case 'FETCH_PROD_SKUS_REJECTED':{
      return {...state, fething:false, fetched:false, sku_error: data.prod_error}
    }
    case 'FETCH_PROD_DATA_FULFILLED':{
      return {...state, fething:true,  fetch:true, products:data.products}
    }
    default: return state

  }

}

export default productsReducer

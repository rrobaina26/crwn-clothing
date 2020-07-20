import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isLoading: true,
  errorMessage: undefined
};

const shopReduccer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_STARTS:
      return {
        isLoading: true,
        ...state
      } 

    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default shopReduccer;

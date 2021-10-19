import { ActionTypes } from '../constants/action-types';
import * as api from '../../api/index';

export const fetchProducts = () => async (dispatch) => {
  const response = await api.fetchProducts();
  console.log(response);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await api.fetchProduct(id);
  console.log(response);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

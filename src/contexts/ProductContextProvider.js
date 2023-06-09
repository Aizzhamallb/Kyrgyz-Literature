import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ACTIONS, JSON_API_IPHONES } from "../helpers/consts";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
  isSideBar: false,
};

const reducer = (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const location = useLocation();

  const getProducts = async () => {
    const { data } = await axios(
      `${JSON_API_IPHONES}/${window.location.search}`
    );
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const addProduct = async newProduct => {
    await axios.post(JSON_API_IPHONES, newProduct);
    getProducts();
  };

  const deleteProduct = async id => {
    await axios.delete(`${JSON_API_IPHONES}/${id}`);
    getProducts();
  };

  const getProductDetails = async id => {
    const { data } = await axios(`${JSON_API_IPHONES}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async newProduct => {
    await axios.patch(`${JSON_API_IPHONES}/${newProduct.id}`, newProduct);
    getProducts();
  };

  // фильтрация тут должна быть
  const fetchByParams = (query, value) => {
    console.log(value, query);
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
    getProducts();
  };

  const values = {
    products: state.products,
    isSideBar: state.isSideBar,
    productDetails: state.productDetails,

    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    fetchByParams,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;

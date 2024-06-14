// context/GlobalContext.js

import React, { createContext, useReducer, useContext } from 'react';

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOG_IN':
      return { ...state, user: payload };
    case 'LOG_OUT':
      return { ...state, user: null };
    case 'ADD_TO_CART':
      return { ...state, total: state.total + payload };
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    products: [],
    total: 0,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;

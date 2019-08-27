import React, { createContext, useContext, useReducer } from "react";

/**
 * 生成一个支持以 reducer 为初始值的复合 Provider
 */
export function generateStoreManager() {
  const StateContext = createContext();
  const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
  const useCtxState = () => useContext(StateContext);
  const attach = (Target, { state, reducer }) => (
    () => (
      <StateProvider initialState={state} reducer={reducer}>
        <Target />
      </StateProvider>
    )
  )

  return {
    attach,
    useCtxState,
  };
}

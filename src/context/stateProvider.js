import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

export default StateProvider;

export const useContextValue = () => useContext(Context);

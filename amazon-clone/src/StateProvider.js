// set up data layer( to track basket)
 
import React, { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

//Build provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
);

//Use it inside a component
export const useStateValue = () => useContext(StateContext);
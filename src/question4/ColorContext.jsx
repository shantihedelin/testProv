// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

import { createContext, useContext, useReducer } from "react";

export const ColorContext = createContext();

const initialState = {
  color: "",
};

function colorReducer(state, action) {
  if (action.type === "selectFavorite") {
    return {
      ...state,
      color: action.color,
    };
  } else {
    console.log("Unknown action type: ", action.type);
    return state;
  }
}

export function ColorProvider({ children }) {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColors() {
  return useContext(ColorContext);
}

import { createContext } from "react";
import { useState } from "react";

export const FireContext = createContext(null);
export const context1 = createContext(null);

export default function Context({ children }) {
  const [nameOfuser, setNameOfuser] = useState(null);

  return (
    <context1.Provider value={{ nameOfuser, setNameOfuser }}>
      {children}
    </context1.Provider>
  );
}

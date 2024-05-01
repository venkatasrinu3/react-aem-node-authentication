import { createContext } from "react";

export const nameContext = createContext();
export const NameContextProvider = nameContext.Provider;
export const NameContextConsumer = nameContext.Consumer;
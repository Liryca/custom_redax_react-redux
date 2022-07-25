import { createContext } from 'react';

export const Context = createContext();

export function Provider({ store, children }) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}
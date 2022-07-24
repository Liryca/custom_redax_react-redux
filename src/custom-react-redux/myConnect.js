import { useEffect, useState, createContext, useContext } from "react";

const Context = createContext();

export function Provider({ store, children }) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function WrappedComponent(props) {
            const store = useContext(Context)

            const [state, setState] = useState(store.getState())

            console.log(state)

            useEffect(() => {
                function handleChange() {
                    setState(store.getState())
                }
                const unsubscribe = store.subscribe(handleChange);

                return () => {
                    unsubscribe();
                }
            }, [store])
            return (
                <Component
                    {...props}
                    {...mapStateToProps(store.getState())}
                    {...mapDispatchToProps(store.dispatch)}
                />
            );
        };
    };
}



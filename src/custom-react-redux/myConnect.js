import { useEffect, useState, useContext } from "react";
import { Context } from "./MyProvader"

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function WrappedComponent(props) {

            const store = useContext(Context)
            
            const [state, setState] = useState(store.getState())

         const a =   useEffect(() => {

                function handleChange() {
                    setState(store.getState())
                    console.log(state)
                }

                const unsubscribe = store.subscribe(handleChange);
            
             return () => {
                    unsubscribe();
                }
         }, [store, state])
         
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



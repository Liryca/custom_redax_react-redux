export function myApplyMiddleware(...middlewares) {

    return createStore => {
        return (reducer, initialState) => {
            const store = createStore(reducer, initialState);
            const { dispatch, getState } = store;
            const storeApi = { dispatch, getState };

            function enchancedDispatch(action) {
                let next = dispatch;
                for (const fn of [...middlewares].reverse()) {
                    next = fn(storeApi)(next)
                }
            
                next(action)   
            }

            return {
                ...store,
                dispatch: enchancedDispatch,
            };
        }
    }
}



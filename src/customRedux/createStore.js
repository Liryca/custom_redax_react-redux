
export function createStore(reducer, initialState, enchancer) {
    if (enchancer !== undefined) {
        const enhancedCreateStore = enchancer(createStore);
        return enhancedCreateStore(reducer, initialState);
    }
    let currentState = initialState;
    let listeners = [];

    return {
        dispatch(action) {
            currentState = reducer(currentState, action)
            listeners.forEach(fn => fn());
            console.log("result", currentState)

        },

        getState() {
            return currentState
        },

        subscribe(newListener) {
            listeners.push(newListener);
            return () => {
                listeners = listeners.filter(fn => fn !== newListener)
            }

        }

    }
}



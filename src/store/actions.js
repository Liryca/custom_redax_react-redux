
 const actionIncrement = { type: 'INCREMENT_COUNT' };
 const actionDecrement = { type: 'DECREMENT_COUNT' };

export function incrementCounter(number) {
    return function (dispatch,getState) {
        dispatch({
            type: actionIncrement.type,
            number
        })    
    }
}

export function decrementCounter(number) {
    return function (dispatch,getState) {
        dispatch({
            type: actionDecrement.type,
            number
        })
    }

}
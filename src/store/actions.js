
 const actionIncrement = { type: 'INCREMENT_COUNT' };
 const actionDecrement = { type: 'DECREMENT_COUNT' };

export function incrementCounter() {
    return function (dispatch) {
        dispatch({
            type:actionIncrement.type
        })    
    }
}

export function decrementCounter() {
    return function (dispatch) {
        dispatch({
            type:actionDecrement.type
        })
    }

}
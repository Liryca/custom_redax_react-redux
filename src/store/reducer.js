
export const initialState = 0;

 export const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNT') {
        return state + 1;
    } if (action.type === 'DECREMENT_COUNT') {
        return state - 1;
    }
    return state;
}